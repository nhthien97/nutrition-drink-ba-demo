import { Link } from "react-router-dom";
import { getCart, getTotalPrice } from "../../../utils/cart";

export default function Checkout() {

  const cart = getCart();

  const total = getTotalPrice();

  return (

    <div
      className="container"
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px"
      }}
    >

      <h1
        style={{
          color: "#006241",
          marginBottom: "30px"
        }}
      >
        Thanh toán
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "40px"
        }}
      >

        <div>

          <h2>Thông tin khách hàng</h2>

          <input
            placeholder="Họ và tên"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "16px"
            }}
          />

          <input
            placeholder="Số điện thoại"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "16px"
            }}
          />

          <input
            placeholder="Địa chỉ"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "16px"
            }}
          />

          <textarea
            placeholder="Ghi chú"
            rows="4"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "16px"
            }}
          />

        </div>

        <div>

          <h2>Đơn hàng</h2>

          {
            cart.map(item => (

              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "16px"
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

          <hr
            style={{
              margin: "20px 0"
            }}
          />

          <h2>

            Tổng:

            <span
              style={{
                color: "#006241"
              }}
            >
              {" "}
              {total.toLocaleString()} đ
            </span>

          </h2>

          <button
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              background: "#006241",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Đặt hàng
          </button>

          <Link
            to="/user/cart"
            style={{
              display: "block",
              marginTop: "16px",
              textAlign: "center",
              color: "#006241"
            }}
          >
            Quay lại giỏ hàng
          </Link>

        </div>

      </div>

    </div>

  );

}
