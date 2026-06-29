import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  getCart,
  getTotalPrice,
  clearCart
} from "../../../utils/cart";

import { createOrder } from "../../../utils/orders";

export default function Checkout() {

  const navigate = useNavigate();

  const cart = getCart();

  const total = getTotalPrice();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const handleCheckout = () => {

    if (cart.length === 0) {
      alert("Giỏ hàng đang trống.");
      return;
    }

    if (!fullName.trim()) {
      alert("Vui lòng nhập họ và tên.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Số điện thoại phải gồm 10 chữ số.");
      return;
    }

    if (!address.trim()) {
      alert("Vui lòng nhập địa chỉ.");
      return;
    }

    const order = createOrder({
      customer: {
        fullName,
        phone,
        address,
        note
      },
      items: cart,
      totalPrice: total
    });

    clearCart();

    alert("Đặt hàng thành công!");

    navigate("/user/tracking?code=" + order.orderCode);

  };

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
          marginBottom: "8px"
        }}
      >
        Thanh toán
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "30px"
        }}
      >
        Vui lòng kiểm tra thông tin trước khi đặt hàng.
      </p>

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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Họ và tên"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "16px"
            }}
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Số điện thoại"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "16px"
            }}
          />

          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Địa chỉ"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "16px"
            }}
          />

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
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
                  alignItems: "center",
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
            onClick={handleCheckout}
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              background: "#006241",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600"
            }}
          >
            Đặt hàng
          </button>

          <Link
            to="/user/cart"
            style={{
              display: "block",
              marginTop: "18px",
              textAlign: "center",
              color: "#006241",
              textDecoration: "none"
            }}
          >
            ← Quay lại giỏ hàng
          </Link>

        </div>

      </div>

    </div>

  );

}
