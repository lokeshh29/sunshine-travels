import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import MobileBottomBar from './components/MobileBottomBar'
import { PackageProvider } from './context/PackageContext'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import DomesticTours from './pages/DomesticTours'
import InternationalTours from './pages/InternationalTours'
import Packages from './pages/Packages'
import CarRental from './pages/CarRental'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

function App() {
  return (
    <PackageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/domestic" element={<DomesticTours />} />
          <Route path="/international" element={<InternationalTours />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/car-rental" element={<CarRental />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
      </Router>
    </PackageProvider>
  )
}

export default App
