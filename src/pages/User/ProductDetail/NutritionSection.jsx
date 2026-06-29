import "./ProductDetail.css";

export default function NutritionSection() {
  const nutrition = [
    {
      label: "Calories",
      value: "120 kcal",
    },
    {
      label: "Protein",
      value: "3 g",
    },
    {
      label: "Carbohydrate",
      value: "26 g",
    },
    {
      label: "Fat",
      value: "0.5 g",
    },
    {
      label: "Vitamin C",
      value: "110%",
    },
    {
      label: "Fiber",
      value: "5 g",
    },
  ];

  return (
    <section className="detail-section">

      <div className="section-header">
        <span className="section-tag">
          Nutrition
        </span>

        <h2>
          Thông tin dinh dưỡng
        </h2>

        <p>
          Giá trị tham khảo cho mỗi khẩu phần 350ml.
        </p>
      </div>

      <div className="nutrition-grid">

        {nutrition.map((item) => (
          <div
            key={item.label}
            className="nutrition-card"
          >

            <h3>
              {item.value}
            </h3>

            <p>
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
