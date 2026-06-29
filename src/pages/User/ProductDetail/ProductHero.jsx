import "./ProductDetail.css";
import { addToCart } from "../../../utils/cart";

export default function ProductHero({ product }) {
  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    alert("Đã thêm sản phẩm vào giỏ hàng.");
  };

  return (
    <section className="product-hero">

      <div className="hero-image">

        <span className="product-badge">
          Best Seller
        </span>

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="hero-content">

        <p className="product-category">
          Nutrition Drink
        </p>

        <h1 className="product-title">
          {product.name}
        </h1>

        <div className="product-rating">
          ★★★★★
          <span>4.9 (126 Reviews)</span>
        </div>

        <div className="product-price">
          {Number(product.price).toLocaleString()} đ
        </div>

        <ul className="product-features">
          <li>✓ 100% nguyên liệu tự nhiên</li>
          <li>✓ Không chất bảo quản</li>
          <li>✓ Giàu vitamin và khoáng chất</li>
          <li>✓ Phù hợp cho mọi lứa tuổi</li>
        </ul>

        <div className="hero-actions">

          <button
            className="btn-cart"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ
          </button>

          <button className="btn-buy">
            Mua ngay
          </button>

        </div>

      </div>

    </section>
  );
}
