import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const now = new Date();

  const date = now.toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="header">

      <div className="header-left">
        <h2>Nutrition Drink Admin</h2>
        <p>{date}</p>
      </div>

      <div className="header-right">

        <Link
          to="/user"
          className="user-site-btn"
        >
          🌐 User Website
        </Link>

        <div className="header-search">
          <input
            type="text"
            placeholder="Tìm kiếm..."
          />
        </div>

        <button className="header-btn">
          🔔
        </button>

        <div className="header-user">

          <div className="header-avatar">
            H
          </div>

          <div>
            <strong>Nguyễn Hoàng Thiên</strong>
            <small>Business Manager</small>
          </div>

        </div>

      </div>

    </header>
  );
}
