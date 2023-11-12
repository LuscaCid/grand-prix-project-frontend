import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globalStyle'
import { Routes } from './routes'

import { AuthProvider } from './hooks/authProvider'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
)
