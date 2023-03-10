import { QueryClient, QueryClientProvider, setLogger } from 'react-query'
import type { DecoratorFn } from '@storybook/react'

// Disable `react-query` error logging
setLogger({
  error: () => {},
  log: (...params) => console.log(...params),
  warn: (...params) => console.warn(...params),
})

// Start Mock Service Worker


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators: DecoratorFn[] = [
  (story) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          retry: false,
        },
      },
    })

    return (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    )
  },
]
