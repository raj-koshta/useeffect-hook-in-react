import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseEffectChallenge from './UseEffectChallenge.jsx'
import UseEffectCleanUp from './UseEffectCleanUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
    <UseEffectChallenge />
    <UseEffectCleanUp />

    </div>
  </StrictMode>,
)
