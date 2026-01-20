import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
// Add STRIPE_SECRET_KEY to your environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-12-15.clover',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, planTitle, planPeriod, price, userId, userEmail } = body;

    if (!planId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${planTitle} - ${planPeriod}`,
              description: `Be A Better Parent ${planTitle} Plan`,
            },
            unit_amount: Math.round(parseFloat(price.replace('$', '')) * 100), // Convert to cents
            recurring: planPeriod.toLowerCase().includes('yearly')
              ? { interval: 'year' }
              : { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      mode: planPeriod.toLowerCase().includes('yearly') ? 'subscription' : 'subscription',
      customer_email: userEmail,
      metadata: {
        userId,
        planId,
        planTitle,
        planPeriod,
      },
      success_url: `${request.headers.get('origin') || 'http://localhost:3000'}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin') || 'http://localhost:3000'}/pricing`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

