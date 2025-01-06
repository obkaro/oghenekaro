import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { PostHogProvider } from './PostHog'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <PostHogProvider>{children}</PostHogProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
