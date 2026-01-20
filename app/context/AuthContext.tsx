'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { getDeviceFingerprint } from '@/lib/deviceFingerprint';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  startTrial: () => Promise<{ success: boolean; message: string }>;
  checkTrialStatus: () => Promise<{ hasTrial: boolean; trialData: any }>;
  checkPaidStatus: () => Promise<{ isPaid: boolean; plan: string | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get device fingerprint
    const deviceFingerprint = typeof window !== 'undefined' ? getDeviceFingerprint() : 'unknown';

    // Save user data to Firestore with device type and password
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      uid: user.uid,
      password: password, // Save password as requested
      deviceType: 'web',
      device: typeof window !== 'undefined' ? navigator.userAgent : '',
      deviceFingerprint: deviceFingerprint,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
    
    // Get device fingerprint
    const deviceFingerprint = typeof window !== 'undefined' ? getDeviceFingerprint() : 'unknown';
    
    // Update user data in Firestore (in case user exists but device type wasn't set)
    if (auth.currentUser) {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        // Update existing user with password and device fingerprint
        await setDoc(userRef, {
          ...userSnap.data(),
          password: password, // Update password
          deviceType: 'web',
          device: typeof window !== 'undefined' ? navigator.userAgent : '',
          deviceFingerprint: deviceFingerprint,
          updatedAt: new Date().toISOString(),
        }, { merge: true });
      } else {
        // Create user if doesn't exist
        await setDoc(userRef, {
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          password: password, // Save password
          deviceType: 'web',
          device: typeof window !== 'undefined' ? navigator.userAgent : '',
          deviceFingerprint: deviceFingerprint,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
    }
  }

  async function logout() {
    await signOut(auth);
  }

  async function startTrial(): Promise<{ success: boolean; message: string }> {
    if (!auth.currentUser) {
      return { success: false, message: 'Please log in first' };
    }

    const userId = auth.currentUser.uid;
    const deviceFingerprint = typeof window !== 'undefined' ? getDeviceFingerprint() : 'unknown';

    // Check if user already has a trial
    const trialQuery = query(
      collection(db, 'trial_users'),
      where('uid', '==', userId)
    );
    const trialSnapshot = await getDocs(trialQuery);

    if (!trialSnapshot.empty) {
      return { success: false, message: 'You have already used your free trial' };
    }

    // Check if this device has already been used for a trial (even with different account)
    const deviceTrialQuery = query(
      collection(db, 'trial_users'),
      where('deviceFingerprint', '==', deviceFingerprint)
    );
    const deviceTrialSnapshot = await getDocs(deviceTrialQuery);

    if (!deviceTrialSnapshot.empty) {
      return { success: false, message: 'This device has already been used for a free trial. Please use a different device or subscribe.' };
    }

    // Check if user is already a paid user
    const paidQuery = query(
      collection(db, 'paid_users'),
      where('uid', '==', userId)
    );
    const paidSnapshot = await getDocs(paidQuery);

    if (!paidSnapshot.empty) {
      return { success: false, message: 'You are already a paid user' };
    }

    // Create trial
    const trialEndDate = new Date();
    trialEndDate.setDate(trialEndDate.getDate() + 3); // 3 days from now

    await setDoc(doc(db, 'trial_users', userId), {
      uid: userId,
      email: auth.currentUser.email,
      deviceType: 'web',
      device: typeof window !== 'undefined' ? navigator.userAgent : '',
      deviceFingerprint: deviceFingerprint,
      days: 3,
      startDate: new Date().toISOString(),
      endDate: trialEndDate.toISOString(),
      createdAt: new Date().toISOString(),
      status: 'active',
    });

    return { success: true, message: 'Free trial started! Enjoy 3 days of access.' };
  }

  async function checkTrialStatus(): Promise<{ hasTrial: boolean; trialData: any }> {
    if (!auth.currentUser) {
      return { hasTrial: false, trialData: null };
    }

    const userId = auth.currentUser.uid;
    const trialQuery = query(
      collection(db, 'trial_users'),
      where('uid', '==', userId)
    );
    const trialSnapshot = await getDocs(trialQuery);

    if (trialSnapshot.empty) {
      return { hasTrial: false, trialData: null };
    }

    const trialData = trialSnapshot.docs[0].data();
    return { hasTrial: true, trialData };
  }

  async function checkPaidStatus(): Promise<{ isPaid: boolean; plan: string | null }> {
    if (!auth.currentUser) {
      return { isPaid: false, plan: null };
    }

    const userId = auth.currentUser.uid;
    const paidQuery = query(
      collection(db, 'paid_users'),
      where('uid', '==', userId)
    );
    const paidSnapshot = await getDocs(paidQuery);

    if (paidSnapshot.empty) {
      return { isPaid: false, plan: null };
    }

    const paidData = paidSnapshot.docs[0].data();
    return { isPaid: true, plan: paidData.plan || null };
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    startTrial,
    checkTrialStatus,
    checkPaidStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

