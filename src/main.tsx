import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AnnouncementsProvider from './context/AnnouncementContext'
import {UserProvider } from './context/userContext'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <AnnouncementsProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </AnnouncementsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

