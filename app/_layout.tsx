import { AppThemesProvider } from '~/theme';
import '../global.css';

import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <AppThemesProvider name="brand">
      <Slot />
    </AppThemesProvider>
  );
}
