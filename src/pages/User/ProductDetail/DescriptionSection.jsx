import "./ProductDetail.css";

export default function DescriptionSection({ product }) {
  return (
    <section className="detail-section">

      <div className="section-header">
        <span className="section-tag">
          Description
        </span>

        <h2>Mô tả sản phẩm</h2>
      </div>

      <div className="description-card">

        <p>
          {product.description ||
            `${product.name} được chế biến từ các nguyên liệu tươi,
            đảm bảo giữ trọn hương vị tự nhiên và giá trị dinh dưỡng.
            Quy trình sản xuất tuân thủ các tiêu chuẩn an toàn thực phẩm,
            mang đến một thức uống lành mạnh cho mọi đối tượng sử dụng.`}
        </p>

        <div className="description-highlight">

          <div className="highlight-item">
            <span className="highlight-title">
              Hương vị
            </span>
            <span className="highlight-value">
              Tự nhiên
            </span>
          </div>

          <div className="highlight-item">
            <span className="highlight-title">
              Bảo quản
            </span>
            <span className="highlight-value">
              2 - 5°C
            </span>
          </div>

          <div className="highlight-item">
            <span className="highlight-title">
              Hạn sử dụng
            </span>
            <span className="highlight-value">
              07 ngày
            </span>
          </div>

          <div className="highlight-item">
            <span className="highlight-title">
              Dung tích
            </span>
            <span className="highlight-value">
              350 ml
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
