// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

interface ThemeProviderProps {
    children:ReactNode
}


const theme = createTheme({
  colors: {
  },

  
});

export function ThemeProvider({children}:ThemeProviderProps) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}