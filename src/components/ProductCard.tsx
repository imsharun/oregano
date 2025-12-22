import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import './product-card.css';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-meta">
          <span className="price">${product.price.toFixed(2)}</span>
          <button onClick={() => addItem(product)} className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
