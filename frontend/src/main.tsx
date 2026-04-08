import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProvider } from './context/AppContext.tsx';
import "leaflet/dist/leaflet.css"
import { SocketProvider } from './context/SocketContext.tsx';


export const authService = 'http://localhost:3000';
export const restaurantService = 'http://localhost:3001';
export const utilsService = 'http://localhost:3002';
export const realtimeService =  'http://localhost:3003';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="877500357652-89eajr7b3jthhsi11ik0es8of7iecros.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
        <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>

  </StrictMode>,
)
