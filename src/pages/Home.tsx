import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Spice up your cooking</h1>
      <p>Discover fresh herbs and spices for every recipe.</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/products">
          <button>Browse Products</button>
        </Link>
      </div>
    </section>
  );
}
