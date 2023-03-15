import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type AppProvidersProps = {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
