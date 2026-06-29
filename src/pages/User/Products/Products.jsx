import "./Products.css";
import { Link } from "react-router-dom";
import products from "../../../data/products";

export default function Products() {

  return (

    <div className="user-products">

      <header className="user-header">

        <h2>🥤 Nutrition Drink</h2>

        <nav>

          <Link to="/user">Trang chủ</Link>

          <Link to="/user/products">Sản phẩm</Link>

          <Link to="/user/about">Giới thiệu</Link>

          <Link className="admin-link" to="/">
            Admin Dashboard
          </Link>

        </nav>

      </header>

      <section className="products-banner">

        <h1>Tất cả sản phẩm</h1>

        <p>
          Đồ uống dinh dưỡng tươi, nguyên liệu tự nhiên,
          tốt cho sức khỏe.
        </p>

      </section>

      <section className="products-grid">

        {

          products.map(item=>(

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
