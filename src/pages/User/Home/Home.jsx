import "./Home.css";
import { Link } from "react-router-dom";
import products from "../../../data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="user-home">

      <header className="user-header">

        <div className="container header-container">

          <Link to="/user" className="logo">
            Nutrition Drink
          </Link>

          <nav className="main-nav">

            <Link to="/user">
              Trang chủ
            </Link>

            <Link to="/user/products">
              Sản phẩm
            </Link>

            <Link to="/user/tracking">
              Theo dõi đơn
            </Link>

            <Link to="/">
              Admin
            </Link>

            <Link
              to="/user/cart"
              className="cart-link"
            >
              🛒 Giỏ hàng
            </Link>

          </nav>

        </div>

      </header>

      <main>

        <section className="hero">

          <div>

            <span className="hero-tag">
              NUTRITION DRINK
            </span>

            <h1>
              Fresh Nutrition Drinks
            </h1>

            <p>
              Thức uống dinh dưỡng an toàn được làm từ nguyên liệu tự nhiên,
              giàu vitamin, khoáng chất và phù hợp với mọi lứa tuổi.
            </p>

            <Link
              to="/user/products"
              className="buy-btn"
            >
              Khám phá ngay
            </Link>

          </div>

          <img
            src={featuredProducts[0].image}
            alt={featuredProducts[0].name}
          />

        </section>

        <section className="best-seller">

          <h2>Sản phẩm nổi bật</h2>

          <div className="product-grid">

            {featuredProducts.map((item) => (

              <div
                className="product-card"
                key={item.id}
              >

                <div className="product-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>

                <h3>{item.name}</h3>

                <p>
                  {item.price.toLocaleString("vi-VN")} đ
                </p>

                <span>
                  Đã bán {item.sold}
                </span>

                <Link
                  to={`/user/product/${item.id}`}
                  className="detail-btn"
                >
                  Xem chi tiết
                </Link>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}
