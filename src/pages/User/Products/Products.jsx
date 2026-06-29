import "./Products.css";
import { Link } from "react-router-dom";
import products from "../../../data/products";

export default function Products() {
  return (
    <div className="user-products">

      <header className="user-header">

        <div className="container header-container">

          <Link
            to="/user"
            className="logo"
          >
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

      <div className="container">

        <nav className="breadcrumb">

          <Link to="/user">
            Trang chủ
          </Link>

          <span>/</span>

          <strong>
            Sản phẩm
          </strong>

        </nav>

      </div>

      <section className="products-banner">

        <h1>
          Tất cả sản phẩm
        </h1>

        <p>
          Thức uống dinh dưỡng tươi được chế biến từ nguyên liệu tự nhiên,
          giàu vitamin và tốt cho sức khỏe mỗi ngày.
        </p>

      </section>

      <section className="products-grid">

        {

          products.map((item) => (

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

              <h3>
                {item.name}
              </h3>

              <p className="category">
                {item.category}
              </p>

              <h2>
                {item.price.toLocaleString("vi-VN")} đ
              </h2>

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

          ))

        }

      </section>

    </div>
  );
}
