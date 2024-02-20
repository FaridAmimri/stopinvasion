/** @format */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/accueil' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Notreentreprise' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
