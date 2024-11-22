import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'

import { DbzApp } from './DbzApp.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DbzApp />
    </BrowserRouter>
  </StrictMode>,
)
