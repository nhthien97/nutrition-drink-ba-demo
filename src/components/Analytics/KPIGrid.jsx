import {
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

import "./KPIGrid.css";

export default function KPIGrid({
  revenue,
  totalOrders,
  totalCustomers,
  totalProducts,
}) {
  const cards = [
    {
      title: "Tổng doanh thu",
      value:
        Number(revenue).toLocaleString("vi-VN") + " đ",
      icon: <FiDollarSign />,
      color: "#16a34a",
      growth: "+12.5%",
    },
    {
      title: "Đơn hàng",
      value: totalOrders,
      icon: <FiShoppingCart />,
      color: "#2563eb",
      growth: "+8.4%",
    },
    {
      title: "Khách hàng",
      value: totalCustomers,
      icon: <FiUsers />,
      color: "#9333ea",
      growth: "+5.8%",
    },
    {
      title: "Sản phẩm",
      value: totalProducts,
      icon: <FiPackage />,
      color: "#f59e0b",
      growth: "+3.1%",
    },
  ];

  return (
    <div className="analytics-kpi-grid">
      {cards.map((card) => (
        <div
          className="analytics-kpi-card"
          key={card.title}
        >
          <div
            className="analytics-kpi-icon"
            style={{
              background: card.color,
            }}
          >
            {card.icon}
          </div>

          <div className="analytics-kpi-content">
            <span>{card.title}</span>

            <h2>{card.value}</h2>

            <small>
              <FiTrendingUp />
              {card.growth}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}
