import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Router/Router.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { FavoritesProvider } from './Context/FavoriteContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <FavoritesProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </FavoritesProvider>
    </HelmetProvider>
  </StrictMode>,
)
