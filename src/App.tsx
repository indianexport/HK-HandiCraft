import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProductSection from './components/ProductSection'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
