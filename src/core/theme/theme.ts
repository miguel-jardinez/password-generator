import { Spacing } from "@password/core/theme/types/spacing";
import { Fonts } from "@password/core/theme/types/fonts";
import { Colors } from "@password/core/theme/types/colors";

export const passwordTheme: PasswordThemeModel = {
  fonts_size: {
    heading_large: Fonts.HEADINGLARGE,
    heading_medium: Fonts.HEADINGMEDIUM,
    body_normal: Fonts.BODY,
  },
  colors: {
    background: Colors.BACKGROUND,
    almost_white: Colors.ALMOSTWHITE,
    dark_grey: Colors.DARKGREY,
    grey: Colors.GREY,
    dark: Colors.DARK,
    neon_green: Colors.NEONGREEN,
    red: Colors.RED,
    orange: Colors.ORANGE,
    yellow: Colors.YELLOW,
  },
  spacing: {
    xsmall: Spacing.XSMALL,
    small: Spacing.SMALL,
    regular: Spacing.REGULAR,
    large: Spacing.LARGE,
    xlarge: Spacing.XLARGE,
  }
} as const;

export interface PasswordThemeModel {
  fonts_size: {
    heading_large: Fonts,
    heading_medium:  Fonts,
    body_normal:  Fonts,
  },
  colors: {
    background: Colors,
    almost_white: Colors,
    dark_grey: Colors,
    grey: Colors,
    dark: Colors,
    neon_green: Colors,
    red: Colors,
    orange: Colors,
    yellow: Colors,
  },
  spacing: {
    xsmall: Spacing,
    small: Spacing,
    regular: Spacing,
    large: Spacing,
    xlarge: Spacing,
  }
}