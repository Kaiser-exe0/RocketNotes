import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home} from './Pages/Home'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './Styles/global'

import theme from './Styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Home />
      </ThemeProvider>
  </StrictMode>,
)
