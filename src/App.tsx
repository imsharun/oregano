import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}
