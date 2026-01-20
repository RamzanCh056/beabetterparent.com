'use client';

import { loadStripe } from '@stripe/stripe-js';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

// Function to save paid user to Firestore
export async function savePaidUser(userId: string, plan: string, planPeriod: string, price: string) {
  await setDoc(doc(db, 'paid_users', userId), {
    uid: userId,
    plan: plan,
    planPeriod: planPeriod,
    price: price,
    deviceType: 'web',
    device: typeof window !== 'undefined' ? navigator.userAgent : '',
    status: 'active',
    startDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

export async function handleStripeCheckout(
  planId: string,
  planTitle: string,
  planPeriod: string,
  price: string,
  userId: string,
  userEmail: string | null
) {
  try {
    const stripe = await stripePromise;
    if (!stripe) {
      throw new Error('Stripe not initialized. Please add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your environment variables.');
    }

    // Create checkout session on your backend
    // TODO: Create API route at /app/api/create-checkout-session/route.ts
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planId,
        planTitle,
        planPeriod,
        price,
        userId,
        userEmail,
      }),
    });

    const session = await response.json();

    if (session.error) {
      throw new Error(session.error);
    }

    if (!session.id) {
      throw new Error('No session ID returned');
    }

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }
  } catch (error: any) {
    throw new Error(error.message || 'Failed to start checkout');
  }
}

