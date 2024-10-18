import { AppThemesProvider } from '~/theme';
import '../global.css';

import { Slot, Stack } from 'expo-router';

export default function Layout() {
  return (
    <AppThemesProvider name="brand">
      <Stack />
    </AppThemesProvider>
  );
}
