# Stripe Integration Setup

## Environment Variables

Add these to your `.env.local` file:

```env
# Stripe Keys (Get from https://dashboard.stripe.com/apikeys)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

## Features Implemented

✅ **3-Day Free Trial System**
- Users get one free trial per account
- Trial data saved to `trial_users` collection with:
  - `uid`: User ID
  - `email`: User email
  - `deviceType`: 'web'
  - `device`: Browser user agent
  - `days`: 3
  - `startDate`: Trial start date
  - `endDate`: Trial end date (3 days later)
  - `status`: 'active'

✅ **Paid Users Collection**
- When user completes payment, saved to `paid_users` collection with:
  - `uid`: User ID
  - `plan`: Plan name (e.g., "PRO", "Member")
  - `planPeriod`: "MONTHLY" or "YEARLY"
  - `price`: Plan price
  - `deviceType`: 'web'
  - `device`: Browser user agent
  - `status`: 'active'
  - `startDate`: Subscription start date

✅ **Login/Signup Flow**
- Professional modals with parenting images
- If user clicks "Get Started" without login → Shows login modal
- After login → Offers free trial (if not used)
- After trial → Redirects to payment

✅ **Payment Flow**
- Stripe Checkout integration
- Payment success page
- Automatic saving to `paid_users` collection

## Firestore Collections Structure

### `trial_users` Collection
```javascript
{
  uid: "user_id",
  email: "user@example.com",
  deviceType: "web",
  device: "Mozilla/5.0...",
  days: 3,
  startDate: "2024-01-01T00:00:00.000Z",
  endDate: "2024-01-04T00:00:00.000Z",
  status: "active",
  createdAt: "2024-01-01T00:00:00.000Z"
}
```

### `paid_users` Collection
```javascript
{
  uid: "user_id",
  plan: "PRO",
  planPeriod: "MONTHLY",
  price: "$47",
  deviceType: "web",
  device: "Mozilla/5.0...",
  status: "active",
  startDate: "2024-01-01T00:00:00.000Z",
  createdAt: "2024-01-01T00:00:00.000Z",
  updatedAt: "2024-01-01T00:00:00.000Z"
}
```

## Next Steps

1. **Add Stripe Keys**: Add your Stripe keys to `.env.local`
2. **Test Payment Flow**: Use Stripe test cards (4242 4242 4242 4242)
3. **Set Up Webhook** (Optional): For production, set up Stripe webhook to handle payment events
4. **Update Pricing**: Adjust plan IDs and prices in `app/page.tsx` pricing section

## Testing

1. Sign up a new user
2. Click "Get Started" on any plan
3. Should see "Start Free Trial" button
4. Click it → Trial starts (check `trial_users` collection)
5. After trial, click "Subscribe Now" → Redirects to Stripe
6. Complete payment → User saved to `paid_users` collection

