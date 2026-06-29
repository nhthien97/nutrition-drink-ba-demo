import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    path: "/",
    icon: "📊",
  },
  {
    name: "Sản phẩm",
    path: "/products",
    icon: "🥤",
  },
  {
    name: "Nguyên liệu",
    path: "/ingredients",
    icon: "🥬",
  },
  {
    name: "Đơn hàng",
    path: "/orders",
    icon: "🧾",
  },
  {
    name: "Khách hàng",
    path: "/customers",
    icon: "👥",
  },
  {
    name: "Gợi ý",
    path: "/recommendation",
    icon: "✨",
  },
  {
    name: "Báo cáo",
    path: "/reports",
    icon: "📈",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-circle">
          🥤
        </div>

        <div>

          <h2>Nutrition</h2>

          <span>Business Admin</span>

        </div>

      </div>

      <nav className="sidebar-menu">

        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            end={menu.path === "/"}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            <span className="sidebar-icon">
              {menu.icon}
            </span>

            <span>{menu.name}</span>
          </NavLink>
        ))}

      </nav>

      <div className="sidebar-footer">

        <p>Business Analysis</p>

        <small>Nutrition Drink Demo</small>

      </div>

    </aside>
  );
}
