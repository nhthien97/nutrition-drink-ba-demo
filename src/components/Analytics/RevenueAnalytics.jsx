import "./RevenueAnalytics.css";

const DAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

export default function RevenueAnalytics({ orders = [] }) {
  const revenue = [0, 0, 0, 0, 0, 0, 0];

  orders.forEach((order) => {
    const date = new Date(order.date);

    if (Number.isNaN(date.getTime())) return;

    const index = date.getDay() === 0 ? 6 : date.getDay() - 1;

    revenue[index] += Number(order.total || 0);
  });

  const maxRevenue = Math.max(...revenue, 1);

  return (
    <div className="revenue-analytics-card">
      <div className="revenue-analytics-header">
        <div>
          <h3>Revenue Analytics</h3>
          <p>Doanh thu theo 7 ngày trong tuần</p>
        </div>

        <span>Weekly</span>
      </div>

      <div className="revenue-analytics-chart">
        {revenue.map((value, index) => (
          <div
            className="revenue-column"
            key={DAYS[index]}
          >
            <div className="revenue-column-wrapper">
              <div
                className="revenue-bar"
                style={{
                  height: `${
                    Math.max(
                      (value / maxRevenue) * 100,
                      value > 0 ? 10 : 4
                    )
                  }%`,
                }}
              >
                {value > 0 && (
                  <small>
                    {(value / 1000).toFixed(0)}k
                  </small>
                )}
              </div>
            </div>

            <span>{DAYS[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
