import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='219121174622-b6n3pv2i2j8b5etd4gsjg4m65kpcnorp.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
