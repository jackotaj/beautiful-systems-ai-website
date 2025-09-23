import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import BookShowAI from './pages/BookShowAI.jsx'
import NeverMissed from './pages/NeverMissed.jsx'
import ReviewRocket from './pages/ReviewRocket.jsx'
import BeautifulReactivation from './pages/BeautifulReactivation.jsx'
import BeautifulCRM from './pages/BeautifulCRM.jsx'
import BookDemo from './pages/BookDemo.jsx'
import AIEmployee from './pages/AIEmployee.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/book-show-ai" element={<BookShowAI />} />
          <Route path="/never-missed" element={<NeverMissed />} />
          <Route path="/review-rocket" element={<ReviewRocket />} />
          <Route path="/beautiful-reactivation" element={<BeautifulReactivation />} />
          <Route path="/beautiful-crm" element={<BeautifulCRM />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/ai-employee" element={<AIEmployee />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </StrictMode>,
)
