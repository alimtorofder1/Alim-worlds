import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
  
   <StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
  
  </div>
)
