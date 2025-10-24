/* eslint-disable no-unused-vars, react-hooks/exhaustive-deps */
/* eslint-disable */
// prettier-ignore
// import "./global.css"
import 'react-native-reanimated';
import { Inter_500Medium, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter";
import { PublicSans_500Medium, PublicSans_700Bold, PublicSans_700Bold_Italic, PublicSans_800ExtraBold, PublicSans_900Black, } from '@expo-google-fonts/public-sans';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';




import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
 const [fontsLoaded] = useFonts({
    PublicSans_900Black,
    PublicSans_500Medium,
    PublicSans_700Bold,
    PublicSans_700Bold_Italic,
    PublicSans_800ExtraBold,
    Inter_900Black,
    Inter_700Bold,
    Inter_500Medium,
  });



  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
