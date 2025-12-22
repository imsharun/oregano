import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  return (
    <section>
      <h2>Products</h2>
      <div className="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
