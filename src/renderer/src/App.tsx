import { QueryClientProvider } from '@tanstack/react-query'
import { Routes } from './routes'
import { queryClient } from './lib/react-query'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  )
}
