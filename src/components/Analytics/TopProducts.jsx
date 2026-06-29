import "./TopProducts.css";

const MEDALS = ["🥇", "🥈", "🥉", "🏅", "🏅"];

export default function TopProducts({ products = [] }) {
  const topProducts = [...products]
    .sort((a, b) => b.sold - a.sold)
    .slice(0, 5);

  const maxSold = Math.max(
    ...topProducts.map((item) => item.sold),
    1
  );

  return (
    <div className="analytics-top-card">
      <div className="analytics-top-header">
        <div>
          <h3>Top Products</h3>
          <p>5 sản phẩm bán chạy nhất</p>
        </div>

        <span>TOP 5</span>
      </div>

      <div className="analytics-top-list">
        {topProducts.map((item, index) => (
          <div
            className="analytics-top-item"
            key={item.id}
          >
            <div className="analytics-top-left">
              <div className="analytics-medal">
                {MEDALS[index]}
              </div>

              <div>
                <strong>{item.name}</strong>

                <small>{item.category}</small>
              </div>
            </div>

            <div className="analytics-top-right">
              <strong>{item.sold} ly</strong>

              <div className="analytics-progress">
                <div
                  className="analytics-progress-fill"
                  style={{
                    width: `${(item.sold / maxSold) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
