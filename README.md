# Expo + Clerk Authentication Example (Android)

This is an example Expo project demonstrating how to integrate Clerk authentication in a React Native mobile app using Expo.

The example focuses on Android development and testing workflow.

## Features

- Clerk authentication (sign-up, sign-in, sign-out)
- Multi-factor authentication (MFA)
- Protected routes using Clerk hooks
- Expo Router file-based routing
- Basic user profile display after login

## Requirements

- Node.js 18+
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for emulator) or physical Android device

## Setup

1. Install dependencies

   ```bash
   npm install
   ```

2. Create a Clerk application

   - Go to https://clerk.com
   - Create a new application
   - Choose "React Native / Expo" as the framework
   - Copy your publishable key

3. Add your publishable key

   Create a file named `.env` in the project root:

   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

   **Important:** Do not commit `.env` to version control.

## Running the app

### Android emulator / device

```bash
npm run android
```

Or start Expo and press `a`:

```bash
npx expo start
```

### Recommended: development build (full auth support)

Expo Go has limitations with some auth flows. Use a development build for full Clerk support:

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --profile development --platform android
```

After the build completes, install the generated APK on your device or emulator.

## Project structure

- `app/_layout.tsx` — wraps the app with `ClerkProvider`
- `app/(auth)/sign-in.tsx` — sign-in flow
- `app/(auth)/sign-up.tsx` — sign-up flow
- `app/(home)/index.tsx` — protected home screen

## Reset to a clean starter app

```bash
npm run reset-project
```

This moves the current `app/` into `app-example/` and creates a fresh `app/` directory.

## Resources

- Clerk Expo Quickstart: https://clerk.com/docs/quickstarts/expo
- Expo Router docs: https://docs.expo.dev/router/introduction/
- Expo Development Builds: https://docs.expo.dev/develop/development-builds/introduction/
- Clerk React Native SDK: https://clerk.com/docs/references/expo/overview

