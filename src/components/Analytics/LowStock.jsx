import { FiAlertTriangle, FiPackage } from "react-icons/fi";
import "./LowStock.css";

export default function LowStock({ ingredients = [] }) {
  const lowStock = ingredients
    .filter((item) => item.stock <= 30)
    .sort((a, b) => a.stock - b.stock);

  return (
    <div className="analytics-alert-card">
      <div className="analytics-alert-header">
        <div>
          <h3>Low Stock</h3>
          <p>Nguyên liệu cần nhập thêm</p>
        </div>

        <span className="alert-count">
          {lowStock.length}
        </span>
      </div>

      <div className="analytics-alert-list">
        {lowStock.length === 0 ? (
          <div className="analytics-empty">
            Không có nguyên liệu sắp hết
          </div>
        ) : (
          lowStock.map((item) => (
            <div
              className="analytics-alert-item"
              key={item.id}
            >
              <div className="analytics-alert-left">
                <div className="analytics-alert-icon">
                  <FiPackage />
                </div>

                <div>
                  <strong>{item.name}</strong>

                  <small>
                    Tồn kho thấp
                  </small>
                </div>
              </div>

              <span className="analytics-danger-badge">
                <FiAlertTriangle />
                {item.stock} {item.unit}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
