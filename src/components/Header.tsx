import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './header.css';

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">OreganoSpices</Link>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart <span className="badge">{totalItems}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
