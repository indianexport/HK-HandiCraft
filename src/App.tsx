import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import ProductPage from "./pages/ProductPage"
import Home from './pages/HomePage'
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
      </BrowserRouter >
    </>
  )
}

export default App
