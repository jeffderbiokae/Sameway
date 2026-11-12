# SameWay

SameWay is a carpooling app for commuters in Accra, Ghana. Drivers who already make a trip offer their empty seats. Riders going the same way book a seat and share the cost.

The app is built for cheap Android phones, weak mobile signal and costly data.

The build plan, stage by stage: https://claude.ai/artifact/VCR4oSnReaqv5M997uBG9A

## Status

Stage 1 of 10: foundation. The app opens and shows a welcome screen. Nothing else works yet.

The app is built for Android first. Testing in Expo Go also works on an iPhone.

## Try the app on your phone

This works on an iPhone or an Android phone.

You need to do steps 1 to 3 only once.

### 1. Make a free Expo account

1. Open https://expo.dev/signup in your browser.
2. Enter your email, a username and a password, then press **Sign up**.
3. Open the email from Expo and press the confirm link.

### 2. Install Expo Go on your phone

1. Open the **App Store** (iPhone) or the **Play Store** (Android).
2. Search for **Expo Go**.
3. Press **Get** (iPhone) or **Install** (Android).
4. Open Expo Go and log in with the Expo account from step 1. On iPhone, allow it to find devices on your local network if it asks.

### 3. Get the code on your computer

If you followed the setup guide, you already have Node.js, Git and VS Code. If not, see https://claude.ai/artifact/LMcmR4F4ARyJEPRB6UZMqP first.

1. Open VS Code.
2. Press **Ctrl+Shift+P** (Windows) or **Cmd+Shift+P** (Mac), type `Git: Clone` and press Enter.
3. Paste `https://github.com/jeffderbiokae/Sameway` and press Enter.
4. Pick a folder (for example Documents) and press **Select as Repository Destination**.
5. Press **Open** when VS Code asks.

### 4. Start the app

1. In VS Code, open the menu **Terminal → New Terminal**. A panel opens at the bottom.
2. Type `npm install` and press Enter. Wait until it finishes (a few minutes the first time).
3. Type `npx expo start --tunnel` and press Enter. A QR code (a square of black and white dots) appears.
4. Scan the QR code with your phone:
   - iPhone: open the normal **Camera** app and point it at the QR code. Tap the yellow **Open in Expo Go** banner that appears.
   - Android: open **Expo Go**, press **Scan QR code** and point the camera at the QR code.
5. The SameWay welcome screen opens on your phone.

To stop the app, click in the terminal and press **Ctrl+C**.

Your phone and computer do not need to be on the same Wi-Fi when you use `--tunnel`. The first time, it may ask to install `@expo/ngrok`. Type `y` and press Enter.

## Checks

Every change must pass these before it is merged. GitHub runs them by itself on each pull request.

| Command             | What it checks                                       |
| ------------------- | ---------------------------------------------------- |
| `npm run typecheck` | The code uses data the right way (TypeScript)        |
| `npm run lint`      | Common mistakes and code style (ESLint and Prettier) |
| `npm test`          | The tests in `__tests__/` pass (Jest)                |
| `npm run check`     | All three of the above                               |

## Where things are

| Folder or file                 | What it holds                                         |
| ------------------------------ | ----------------------------------------------------- |
| `src/app/`                     | The screens. Each file is one screen.                 |
| `src/theme/`                   | Colours, text sizes and spacing shared by all screens |
| `__tests__/`                   | Automatic tests                                       |
| `app.json`                     | App name, icon and Android settings                   |
| `.github/workflows/checks.yml` | The checks GitHub runs on every pull request          |
| `AGENTS.md`                    | Notes for AI coding assistants working on this code   |
