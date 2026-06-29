import "./ProductDetail.css";
import { Link } from "react-router-dom";

export default function RelatedProducts({ products = [] }) {
  return (
    <section className="detail-section">

      <div className="section-header">
        <span className="section-tag">
          More Drinks
        </span>

        <h2>
          Sản phẩm liên quan
        </h2>

        <p>
          Khám phá thêm các loại nước uống dinh dưỡng được nhiều khách
          hàng yêu thích.
        </p>
      </div>

      <div className="related-grid">

        {products.map((item) => (

          <article
            key={item.id}
            className="related-card"
          >

            <div className="related-image">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="related-body">

              <h3>
                {item.name}
              </h3>

              <p className="related-price">
                {Number(item.price).toLocaleString()} đ
              </p>

              <Link
                to={`/products/${item.id}`}
                className="related-button"
              >
                Xem chi tiết
              </Link>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}
