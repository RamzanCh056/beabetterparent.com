'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import Toast from './Toast';

interface PlanButtonProps {
  planTitle: string;
  planPeriod: string;
  price: string;
  planId: string; // For Stripe
}

export default function PlanButton({ planTitle, planPeriod, price, planId }: PlanButtonProps) {
  const { currentUser, startTrial, checkTrialStatus, checkPaidStatus } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [trialStatus, setTrialStatus] = useState<{ hasTrial: boolean; trialData: any } | null>(null);
  const [paidStatus, setPaidStatus] = useState<{ isPaid: boolean; plan: string | null } | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (currentUser) {
      checkTrialStatus().then(setTrialStatus);
      checkPaidStatus().then(setPaidStatus);
    }
  }, [currentUser, checkTrialStatus, checkPaidStatus]);

  const handleGetStarted = async () => {
    if (!currentUser) {
      // Show login modal
      setShowLoginModal(true);
      return;
    }

    // Check if user is already paid
    if (paidStatus?.isPaid) {
      setMessage('You already have an active subscription!');
      return;
    }

    // Check if user has used trial
    if (trialStatus?.hasTrial) {
      // Proceed to payment
      handlePayment();
    } else {
      // Offer free trial first
      setLoading(true);
      const result = await startTrial();
      setLoading(false);
      
      if (result.success) {
        setMessage('🎉 Free trial started! Enjoy 3 days of access.');
        // Show toast with download app message
        setToastMessage('🎉 Free trial started! Download our app and enjoy your 3 days free trial.');
        setShowToast(true);
        // Refresh trial status
        setTimeout(() => {
          checkTrialStatus().then(setTrialStatus);
        }, 1000);
      } else {
        setMessage(result.message);
        setToastMessage(result.message);
        setShowToast(true);
      }
    }
  };

  const handlePayment = async () => {
    if (!currentUser) {
      setShowLoginModal(true);
      return;
    }

    setLoading(true);
    setMessage('Redirecting to payment...');
    
    try {
      const { handleStripeCheckout } = await import('./StripeCheckout');
      await handleStripeCheckout(
        planId,
        planTitle,
        planPeriod,
        price,
        currentUser.uid,
        currentUser.email
      );
    } catch (error: any) {
      setMessage(`Payment error: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <>
      <Toast
        message={toastMessage}
        type={toastMessage.includes('🎉') ? 'success' : 'error'}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={6000}
      />
      
      <div className="space-y-2">
        <button
          onClick={handleGetStarted}
          disabled={loading}
          className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? 'Processing...' : 
           !currentUser ? 'Get Started' :
           trialStatus?.hasTrial ? 'Subscribe Now' :
           'Start Free Trial'}
        </button>
        {message && (
          <p className={`text-xs text-center ${message.includes('🎉') ? 'text-green-600' : 'text-orange-600'}`}>
            {message}
          </p>
        )}
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
}

