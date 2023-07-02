import { passwordTheme } from "@password/core/theme/theme";

type CustomTheme = typeof passwordTheme;



declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}