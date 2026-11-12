// Shared colours and spacing, so every screen looks the same.
// Colours chosen for strong contrast on cheap, dim phone screens in sunlight.
export const colors = {
  background: '#FFFFFF',
  text: '#1A1A1A',
  mutedText: '#555555',
  primary: '#0B6E4F',
  primaryText: '#FFFFFF',
} as const;

export const spacing = {
  small: 8,
  medium: 16,
  large: 24,
} as const;

export const fontSizes = {
  body: 16,
  title: 32,
} as const;
