import "./RecentOrders.css";
import orders from "../../data/orders";

const STATUS_COLOR = {
  "Hoàn thành": "#22c55e",
  "Đang giao": "#3b82f6",
  "Đang pha chế": "#f59e0b",
  "Chờ xác nhận": "#ef4444",
};

export default function RecentOrders() {
  const latestOrders = [...orders]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="recent-orders-card">
      <div className="recent-orders-header">
        <div>
          <h3>Recent Orders</h3>
          <p>5 đơn hàng mới nhất</p>
        </div>

        <span>{latestOrders.length} Orders</span>
      </div>

      <div className="recent-orders-list">
        {latestOrders.map((order) => (
          <div
            className="recent-order-item"
            key={order.id}
          >
            <div>
              <strong>#{order.id}</strong>

              <small>{order.customer}</small>
            </div>

            <div className="recent-order-right">
              <strong>
                {order.total.toLocaleString("vi-VN")} đ
              </strong>

              <span
                className="recent-status"
                style={{
                  background: `${STATUS_COLOR[order.status]}20`,
                  color: STATUS_COLOR[order.status],
                }}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
