import './App.css'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProductSection from './components/ProductSection'
import ReviewSection from './components/ReviewSection'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ReviewSection />
      {/* <AboutSection /> */}
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
