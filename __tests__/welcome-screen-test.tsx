import { render, screen } from '@testing-library/react-native';

import WelcomeScreen from '@/app/index';

describe('<WelcomeScreen />', () => {
  test('shows the app name as a heading', async () => {
    await render(<WelcomeScreen />);

    expect(screen.getByRole('header')).toHaveTextContent('SameWay');
  });

  test('shows the tagline', async () => {
    await render(<WelcomeScreen />);

    expect(screen.getByText('Share the ride. Share the cost.')).toBeOnTheScreen();
  });
});
