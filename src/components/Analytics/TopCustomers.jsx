import "./TopCustomers.css";

export default function TopCustomers({ customers = [] }) {
  const topCustomers = [...customers]
    .sort((a, b) => b.point - a.point)
    .slice(0, 5);

  return (
    <div className="analytics-customer-card">
      <div className="analytics-customer-header">
        <div>
          <h3>Top Customers</h3>
          <p>Khách hàng thân thiết</p>
        </div>

        <span>VIP</span>
      </div>

      <div className="analytics-customer-list">
        {topCustomers.map((customer, index) => (
          <div
            className="analytics-customer-item"
            key={customer.id}
          >
            <div className="analytics-customer-left">
              <div className="analytics-avatar">
                {customer.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <strong>{customer.name}</strong>

                <small>
                  {customer.orders} đơn hàng
                </small>
              </div>
            </div>

            <div className="analytics-customer-right">
              {index < 3 && (
                <span className="analytics-vip">
                  VIP
                </span>
              )}

              <strong>
                {customer.point} điểm
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
