import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, fontSizes, spacing } from '@/theme';

// The first screen people see. Stage 3 replaces the placeholder text
// with "Sign up" and "Log in" buttons.
export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title} accessibilityRole="header">
          SameWay
        </Text>
        <Text style={styles.tagline}>Share the ride. Share the cost.</Text>
        <Text style={styles.note}>Version 0.1: the app is being built.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.large,
    gap: spacing.medium,
  },
  title: {
    fontSize: fontSizes.title,
    fontWeight: 'bold',
    color: colors.primary,
  },
  tagline: {
    fontSize: fontSizes.body,
    color: colors.text,
    textAlign: 'center',
  },
  note: {
    fontSize: fontSizes.body,
    color: colors.mutedText,
    textAlign: 'center',
  },
});
