import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.jsx'
import About from './Pages/About.jsx'
import Artisans from './Pages/Artisans.jsx'
import Contact from './Pages/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/contact', element: <Contact/>},
  {path: '/about', element: <About/>},
  {path: '/artisans', element: <Artisans/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
