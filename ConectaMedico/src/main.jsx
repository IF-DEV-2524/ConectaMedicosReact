import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.jsx'
import SectionHome from './pages/Home/SectionHome.jsx'
import SectionMain from './pages/Home/SectionMain.jsx'
import Footer from './pages/Home/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <SectionHome />
    <SectionMain />
    <Footer />
  </StrictMode>,

)
