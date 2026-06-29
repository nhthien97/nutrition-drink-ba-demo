import "./ProductDetail.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pd-footer">

      <div className="container footer-content">

        <div className="footer-brand">

          <h2>Nutrition Drink</h2>

          <p>
            Fresh • Healthy • Safe
          </p>

          <span>
            Premium nutrition drinks made from carefully selected natural
            ingredients.
          </span>

        </div>

        <div className="footer-column">

          <h4>Products</h4>

          <ul>
            <li>Detox Drinks</li>
            <li>Fresh Juice</li>
            <li>Smoothies</li>
            <li>Nut Milk</li>
          </ul>

        </div>

        <div className="footer-column">

          <h4>Support</h4>

          <ul>
            <li>Contact</li>
            <li>Shipping</li>
            <li>Order Tracking</li>
            <li>FAQ</li>
          </ul>

        </div>

        <div className="footer-column">

          <h4>Business Analysis Demo</h4>

          <p>
            React + Vite
          </p>

          <p>
            LocalStorage
          </p>

          <p>
            No Backend
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="container">

          © {year} Nutrition Drink BA Demo. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}
