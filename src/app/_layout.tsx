import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// The root layout wraps every screen in the app.
// A Stack means screens slide on top of each other, with a back button.
export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="dark" />
    </>
  );
}
