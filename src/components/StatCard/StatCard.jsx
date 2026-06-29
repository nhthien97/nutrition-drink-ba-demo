import "./StatCard.css";

function StatCard({ title, value, color }) {
  return (
    <div className="stat-card">
      <div
        className="stat-icon"
        style={{ backgroundColor: color }}
      ></div>

      <div className="stat-content">
        <h2>{value}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default StatCard;