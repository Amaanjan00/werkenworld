import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Pages/App.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TermsAndCondition from './Pages/TermsAndCondition.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/contact', element: <Contact/>},
  {path: '/about', element: <About/>},
  {path: '/terms-and-conditions', element: <TermsAndCondition/>},
  {path: '/privacy-policy', element: <PrivacyPolicy/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
