import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/main.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import 'boxicons/css/boxicons.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)