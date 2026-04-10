import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'alk-life/css/alk-life.min.css'
import './styles/reset.css'
import './styles/styles.css'
import './styles/resolutions.css'
import './styles/events.css'
import './styles/tips.css'
import './styles/contact.css'
import './styles/profile.css'
import './styles/calendar.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
