# 🔥 Firebase Setup Guide for Portfolio

## Overview

This portfolio now uses Firebase for:

- **Firestore Database**: Store contact form messages
- **Firebase Storage**: Store images and assets (optional)
- **Real-time updates**: Future feature for admin dashboard

## 🚀 Firebase Project Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name (e.g., "y-portfolio")
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Click "Done"

### 3. Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Add app" → Web app
4. Register app with a nickname
5. Copy the configuration object

### 4. Set Environment Variables

Create a `.env` file in your project root:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 📊 Firestore Security Rules

### Basic Rules (Development)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to contactMessages collection
    match /contactMessages/{document} {
      allow read, write: if true;
    }
  }
}
```

### Production Rules (Recommended)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to create contact messages
    match /contactMessages/{document} {
      allow create: if true;
      allow read, update, delete: if false; // Only admin can read/update/delete
    }
  }
}
```

## 🔧 How It Works

### Contact Form Flow

1. **User submits form** → Frontend validation
2. **Firebase service** → Additional validation
3. **Firestore** → Stores message with timestamp
4. **Success response** → User sees confirmation

### Data Structure

```javascript
// contactMessages collection
{
  name: "John Doe",
  email: "john@example.com",
  message: "Hello, I'd like to discuss a project...",
  timestamp: Timestamp,
  status: "new"
}
```

## 📱 Admin Dashboard (Future Feature)

You can create an admin dashboard to:

- View all contact messages
- Mark messages as read/replied
- Export data
- Send email notifications

## 🚀 Deployment

### Deploy to Firebase Hosting

1. Install Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:

   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:

   ```bash
   firebase init
   ```

4. Build your project:

   ```bash
   npm run build
   ```

5. Deploy:
   ```bash
   firebase deploy
   ```

### Alternative: Deploy to Vercel/Netlify

1. Set environment variables in your hosting platform
2. Deploy as usual
3. Firebase will work from any hosting platform

## 🔒 Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **Firestore Rules**: Use proper security rules
3. **Rate Limiting**: Consider implementing rate limiting
4. **Data Validation**: Validate on both client and server
5. **Backup**: Regularly backup your Firestore data

## 📊 Monitoring

### Firebase Console Features

- **Analytics**: Track user interactions
- **Crashlytics**: Monitor app crashes
- **Performance**: Monitor app performance
- **Firestore**: View database usage and costs

### Cost Management

- **Free Tier**: 50,000 reads, 20,000 writes per day
- **Pricing**: $0.18 per 100,000 reads, $0.18 per 100,000 writes
- **Monitoring**: Set up billing alerts

## 🛠️ Troubleshooting

### Common Issues

1. **Firebase not initialized**: Check environment variables
2. **Permission denied**: Check Firestore security rules
3. **Network errors**: Check internet connection
4. **Build errors**: Ensure all dependencies are installed

### Debug Mode

Enable debug logging in development:

```javascript
// In firebase.js
if (import.meta.env.DEV) {
  console.log("Firebase config:", firebaseConfig);
}
```

## 📈 Future Enhancements

- **Email notifications**: Send emails when messages are received
- **Admin dashboard**: Manage messages through web interface
- **File uploads**: Allow file attachments in contact form
- **Real-time updates**: Live updates for admin dashboard
- **Analytics**: Track form submissions and user behavior

## 🔗 Useful Links

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Pricing](https://firebase.google.com/pricing)
- [Firebase CLI](https://firebase.google.com/docs/cli)
