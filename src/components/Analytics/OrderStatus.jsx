import "./OrderStatus.css";

const STATUS_COLORS = {
  "Hoàn thành": "#22c55e",
  "Đang pha chế": "#3b82f6",
  "Đang giao": "#f59e0b",
  "Chờ xác nhận": "#ef4444",
};

export default function OrderStatus({ orders = [] }) {
  const total = orders.length || 1;

  const stats = Object.keys(STATUS_COLORS).map((status) => {
    const count = orders.filter(
      (order) => order.status === status
    ).length;

    return {
      status,
      count,
      percent: Math.round((count / total) * 100),
      color: STATUS_COLORS[status],
    };
  });

  return (
    <div className="analytics-status-card">
      <div className="analytics-status-header">
        <div>
          <h3>Order Status</h3>
          <p>Phân bố trạng thái đơn hàng</p>
        </div>

        <span>{orders.length} Orders</span>
      </div>

      <div className="analytics-status-list">
        {stats.map((item) => (
          <div
            className="analytics-status-item"
            key={item.status}
          >
            <div className="analytics-status-top">
              <div className="analytics-status-name">
                <span
                  className="analytics-status-dot"
                  style={{
                    background: item.color,
                  }}
                />

                <strong>{item.status}</strong>
              </div>

              <span>
                {item.count} ({item.percent}%)
              </span>
            </div>

            <div className="analytics-status-progress">
              <div
                className="analytics-status-fill"
                style={{
                  width: `${item.percent}%`,
                  background: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
