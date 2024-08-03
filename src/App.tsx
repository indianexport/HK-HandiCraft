import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import ProductPage from "./pages/ProductPage"
import Home from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
