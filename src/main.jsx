import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseEffectChallenge from './UseEffectChallenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffectChallenge />
  </StrictMode>,
)
