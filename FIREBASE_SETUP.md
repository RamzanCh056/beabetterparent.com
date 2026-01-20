# Firebase Setup Guide

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard

## Step 2: Enable Authentication

1. In your Firebase project, go to **Authentication** in the left sidebar
2. Click **Get Started**
3. Enable **Email/Password** authentication:
   - Click on "Email/Password"
   - Toggle "Enable" to ON
   - Click "Save"

## Step 3: Enable Firestore Database

1. Go to **Firestore Database** in the left sidebar
2. Click **Create database**
3. Choose **Start in test mode** (for development) or set up security rules
4. Select a location for your database
5. Click **Enable**

## Step 4: Get Your Firebase Config

1. Go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web** icon (`</>`) to add a web app
4. Register your app with a nickname (e.g., "Be A Better Parent Web")
5. Copy the Firebase configuration values

## Step 5: Add Environment Variables

1. Create a `.env.local` file in the root of your project
2. Add the following variables with your Firebase config values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 6: Set Up Firestore Security Rules (Optional but Recommended)

Go to **Firestore Database** > **Rules** and update:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      // Users can only read/write their own data
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 7: Test the Integration

1. Start your development server: `npm run dev`
2. Click "Get Started" or "Log In" in the header
3. Try creating an account
4. Check Firestore Database to see the user document with `deviceType: 'web'`

## Features Implemented

✅ Email/Password Authentication
✅ User Signup with Firestore storage
✅ User Login
✅ Automatic user data saving to Firestore with `deviceType: 'web'`
✅ Logout functionality
✅ Protected routes ready (can be extended)

## User Data Structure in Firestore

Each user document in the `users` collection contains:
- `email`: User's email address
- `uid`: User's unique ID from Firebase Auth
- `deviceType`: Always set to `'web'` for web users
- `createdAt`: Timestamp when account was created
- `updatedAt`: Timestamp when account was last updated

