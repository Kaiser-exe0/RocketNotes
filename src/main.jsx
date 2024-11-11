import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Styles/global'

import theme from './Styles/theme';

import { Routes } from './Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Routes/>
      </ThemeProvider>
  </StrictMode>,
)
