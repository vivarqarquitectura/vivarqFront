import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/global.css'
import '../src/styles/components/navBar/navBar.css'
import Rutas from './Rutas.jsx'
import Clarity from "@microsoft/clarity";

if (import.meta?.env?.PROD ?? process.env.NODE_ENV === "production") {
  Clarity.init("su99hzf5zs"); // reemplaza por tu ID de Clarity
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rutas />
  </StrictMode>,
)
