import "./Home.css";

import { Link } from "react-router-dom";
import products from "../../data/products";

export default function Home() {
  const topProducts = [...products]
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 4);

  return (
    <div className="home">

      <nav className="home-nav">

        <h2>🥤 Nutrition Drink</h2>

        <div className="home-menu">
          <Link to="/">Home</Link>
          <Link to="/shop">Products</Link>
          <Link to="/recommendation">Recommendation</Link>
          <Link to="/about">About</Link>

          <Link className="admin-btn" to="/admin">
            Admin Dashboard
          </Link>
        </div>

      </nav>

      <section className="hero">

        <div className="hero-content">

          <h1>
            Healthy Drinks
            <br />
            For Better Life
          </h1>

          <p>
            Fresh • Organic • Healthy • Safe
          </p>

          <Link className="shop-btn" to="/shop">
            Shop Now
          </Link>

        </div>

        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
          alt="Healthy Drink"
        />

      </section>

      <section className="top-products">

        <h2>Best Seller</h2>

        <div className="product-grid">

          {topProducts.map((item) => (
            <div
              className="product-card"
              key={item.id}
            >
              <h3>{item.name}</h3>

              <p>
                {item.price.toLocaleString("vi-VN")} đ
              </p>

              <span>Đã bán {item.sold}</span>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}
