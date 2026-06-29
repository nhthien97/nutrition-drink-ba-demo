import { Link, useSearchParams } from "react-router-dom";
import { getOrderByCode } from "../../../utils/orders";

export default function Tracking() {

  const [searchParams] = useSearchParams();

  const code = searchParams.get("code");

  const order = getOrderByCode(code);

  if (!order) {
    return (
      <div
        style={{
          maxWidth: "900px",
          margin: "60px auto",
          textAlign: "center"
        }}
      >
        <h1>Không tìm thấy đơn hàng</h1>

        <Link to="/user">
          Quay về Trang chủ
        </Link>
      </div>
    );
  }

  return (

    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px"
      }}
    >

      <h1
        style={{
          color: "#006241"
        }}
      >
        Theo dõi đơn hàng
      </h1>

      <p>
        <strong>Mã đơn:</strong> {order.orderCode}
      </p>

      <p>
        <strong>Trạng thái:</strong> {order.status}
      </p>

      <p>
        <strong>Tổng tiền:</strong>{" "}
        {Number(order.totalPrice).toLocaleString()} đ
      </p>

      <h2
        style={{
          marginTop: "40px"
        }}
      >
        Sản phẩm
      </h2>

      {
        order.items.map(item => (

          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "14px 0",
              borderBottom: "1px solid #eee"
            }}
          >

            <span>
              {item.name} × {item.quantity}
            </span>

            <strong>
              {(item.price * item.quantity).toLocaleString()} đ
            </strong>

          </div>

        ))
      }

      <Link
        to="/user/products"
        style={{
          display: "inline-block",
          marginTop: "30px",
          color: "#006241"
        }}
      >
        Tiếp tục mua sắm
      </Link>

    </div>

  );

}
