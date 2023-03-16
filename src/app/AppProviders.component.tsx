import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { DefaultTheme } from 'src/themes'

type AppProvidersProps = {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
