import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Routes from './Routes'
import 'react-photo-view/dist/react-photo-view.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
)
