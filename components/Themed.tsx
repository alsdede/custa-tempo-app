/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView, TextProps as RNTextProps } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

// Tipos de fontes
type FontFamily = 'Inter' | 'PublicSans';
type InterWeight = '500Medium' | '700Bold' | '900Black';
type PublicSansWeight = '500Medium' | '700Bold' | '700BoldItalic' | '800ExtraBold' | '900Black';

type FontMap = {
  Inter: Record<InterWeight, string>;
  PublicSans: Record<PublicSansWeight, string>;
};

// Props do Text personalizado
export type TextProps = RNTextProps & {
  lightColor?: string;
  darkColor?: string;
  fontFamily?: FontFamily;
  fontSize?:number;
  weight?: InterWeight | PublicSansWeight;
};

// Mapeamento das fontes
const fontMap: FontMap = {
  Inter: {
    '500Medium': 'Inter_500Medium',
    '700Bold': 'Inter_700Bold',
    '900Black': 'Inter_900Black',
  },
  PublicSans: {
    '500Medium': 'PublicSans_500Medium',
    '700Bold': 'PublicSans_700Bold',
    '700BoldItalic': 'PublicSans_700Bold_Italic',
    '800ExtraBold': 'PublicSans_800ExtraBold',
    '900Black': 'PublicSans_900Black',
  },
};

// Mapeamento seguro do weight
type WeightForFamily<F extends FontFamily> = F extends 'Inter' ? InterWeight : PublicSansWeight;

export function Text({
  style,
  lightColor,
  darkColor,
  fontFamily = 'Inter',
  weight = '500Medium',
  fontSize=14,
  ...otherProps
}: TextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Type-safe indexing
  const familyWeights = fontMap[fontFamily] as Record<WeightForFamily<typeof fontFamily>, string>;
  const selectedFont = familyWeights[weight as WeightForFamily<typeof fontFamily>];

  return <DefaultText style={[{ color, fontFamily: selectedFont,fontSize:fontSize }, style]} {...otherProps} />;
}


export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
