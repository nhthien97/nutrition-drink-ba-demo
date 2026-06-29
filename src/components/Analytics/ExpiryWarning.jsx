import { FiClock } from "react-icons/fi";
import "./ExpiryWarning.css";

export default function ExpiryWarning({ ingredients = [] }) {
  const today = new Date();

  const expiryList = ingredients
    .map((item) => {
      const expiry = new Date(item.expiry);

      const daysLeft = Math.ceil(
        (expiry - today) / (1000 * 60 * 60 * 24)
      );

      return {
        ...item,
        daysLeft,
      };
    })
    .filter((item) => item.daysLeft <= 30)
    .sort((a, b) => a.daysLeft - b.daysLeft);

  return (
    <div className="analytics-expiry-card">
      <div className="analytics-expiry-header">
        <div>
          <h3>Expiry Warning</h3>
          <p>Nguyên liệu sắp hết hạn</p>
        </div>

        <span className="expiry-count">
          {expiryList.length}
        </span>
      </div>

      <div className="analytics-expiry-list">
        {expiryList.length === 0 ? (
          <div className="analytics-expiry-empty">
            Không có nguyên liệu sắp hết hạn
          </div>
        ) : (
          expiryList.map((item) => (
            <div
              className="analytics-expiry-item"
              key={item.id}
            >
              <div className="analytics-expiry-left">
                <div className="analytics-expiry-icon">
                  <FiClock />
                </div>

                <div>
                  <strong>{item.name}</strong>

                  <small>
                    HSD: {item.expiry}
                  </small>
                </div>
              </div>

              <span className="analytics-warning-badge">
                {item.daysLeft} ngày
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
