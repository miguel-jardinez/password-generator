import React from "react";
import {ThemeProvider} from "styled-components";
import {passwordTheme} from "@password/core/theme/theme";

interface PasswordThemeProviderProps {
  children: React.ReactNode
}

export const PasswordThemeProvider: React.FC<PasswordThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={passwordTheme}>
      { children }
    </ThemeProvider>
  )
}