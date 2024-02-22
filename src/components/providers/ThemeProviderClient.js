'use client';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

function ThemeProviderClient({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeProviderClient;
