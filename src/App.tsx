import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/Themes/default'
import { SkeletonTheme } from 'react-loading-skeleton'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SkeletonTheme
          baseColor={defaultTheme['base-post']}
          highlightColor={defaultTheme['base-border']}
          borderRadius={8}
        >
          <Router />
        </SkeletonTheme>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
