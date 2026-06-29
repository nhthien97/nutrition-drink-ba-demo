import "./ProductDetail.css";

export default function IngredientSection({ product }) {
  const ingredients =
    product.ingredients || [
      "Táo xanh",
      "Cam tươi",
      "Việt quất",
      "Mật ong",
      "Nước tinh khiết"
    ];

  return (
    <section className="detail-section">

      <div className="section-header">
        <span className="section-tag">Ingredients</span>
        <h2>Thành phần</h2>
        <p>
          Các nguyên liệu được lựa chọn từ nguồn cung cấp an toàn,
          đảm bảo độ tươi và giữ nguyên giá trị dinh dưỡng.
        </p>
      </div>

      <div className="ingredient-grid">

        {ingredients.map((item, index) => (
          <div
            key={index}
            className="ingredient-card"
          >
            <div className="ingredient-icon">
              🌿
            </div>

            <h4>{item}</h4>

            <p>
              Thành phần tự nhiên, được kiểm định chất lượng
              trước khi đưa vào sản xuất.
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
