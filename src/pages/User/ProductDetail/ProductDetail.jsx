import "./ProductDetail.css";
import { Link, useParams } from "react-router-dom";
import products from "../../../data/products";

import ProductHero from "./ProductHero";
import IngredientSection from "./IngredientSection";
import DescriptionSection from "./DescriptionSection";
import NutritionSection from "./NutritionSection";
import RelatedProducts from "./RelatedProducts";
import Footer from "./Footer";

export default function ProductDetail() {
  const { id } = useParams();

  const product =
    products.find((item) => item.id === Number(id)) || products[0];

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail-page">

      <header className="pd-header">
        <div className="container header-container">

          <Link to="/" className="logo">
            Nutrition Drink
          </Link>

          <nav className="main-nav">

            <Link to="/">
              Trang chủ
            </Link>

            <Link to="/products">
              Sản phẩm
            </Link>

            <Link to="/tracking">
              Theo dõi đơn
            </Link>

            <Link to="/admin">
              Admin
            </Link>

            <Link to="/cart" className="cart-link">
              🛒 Giỏ hàng
            </Link>

          </nav>

        </div>
      </header>

      <div className="container">

        <nav className="breadcrumb">

          <Link to="/">
            Trang chủ
          </Link>

          <span>/</span>

          <Link to="/products">
            Sản phẩm
          </Link>

          <span>/</span>

          <strong>
            {product.name}
          </strong>

        </nav>

        <ProductHero product={product} />

        <IngredientSection product={product} />

        <DescriptionSection product={product} />

        <NutritionSection product={product} />

        <RelatedProducts products={relatedProducts} />

      </div>

      <Footer />

    </div>
  );
}
