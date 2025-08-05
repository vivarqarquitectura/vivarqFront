import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/global.css'
import '../src/styles/components/navBar/navBar.css'
import Rutas from './Rutas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rutas />
  </StrictMode>,
)
