import { useState } from "react";
import { Link } from "react-router-dom";

import "../Home/Home.css";

import {
  updateQuantity,
  removeFromCart,
  getCart,
  getTotalPrice
} from "../../../utils/cart";

export default function Cart() {

  const [cart, setCart] = useState(getCart());

  const refreshCart = () => {
    setCart(getCart());
  };

  const handleIncrease = (item) => {
    updateQuantity(item.id, item.quantity + 1);
    refreshCart();
  };

  const handleDecrease = (item) => {
    updateQuantity(item.id, item.quantity - 1);
    refreshCart();
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    refreshCart();
  };

  const total = getTotalPrice();

  return (

    <div className="user-home">

      <header className="user-header">

        <div className="container header-container">

          <Link to="/user" className="logo">
            Nutrition Drink
          </Link>

          <nav className="main-nav">

            <Link to="/user">
              Trang chủ
            </Link>

            <Link to="/user/products">
              Sản phẩm
            </Link>

            <Link to="/user/tracking">
              Theo dõi đơn
            </Link>

            <Link to="/">
              Admin
            </Link>

            <Link
              to="/user/cart"
              className="cart-link"
            >
              🛒 Giỏ hàng
            </Link>

          </nav>

        </div>

      </header>

      <div
        className="container"
        style={{
          maxWidth: "1200px",
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
          🛒 Giỏ hàng
        </h1>

        {

          cart.length === 0 ? (

            <div
              style={{
                textAlign: "center",
                padding: "80px 20px"
              }}
            >

              <h2>Giỏ hàng đang trống</h2>

              <p>Hãy thêm sản phẩm trước khi thanh toán.</p>

              <Link
                to="/user/products"
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "12px 24px",
                  background: "#006241",
                  color: "#fff",
                  borderRadius: "10px",
                  textDecoration: "none"
                }}
              >
                Xem sản phẩm
              </Link>

            </div>

          ) : (

            <>

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse"
                }}
              >

                <thead>

                  <tr>

                    <th align="left">Sản phẩm</th>

                    <th>Giá</th>

                    <th>Số lượng</th>

                    <th>Thành tiền</th>

                    <th></th>

                  </tr>

                </thead>

                <tbody>

                  {

                    cart.map(item => (

                      <tr
                        key={item.id}
                        style={{
                          borderTop: "1px solid #eee"
                        }}
                      >

                        <td
                          style={{
                            padding: "20px 0",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px"
                          }}
                        >

                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "70px",
                              height: "70px",
                              objectFit: "cover",
                              borderRadius: "10px"
                            }}
                          />

                          <strong>{item.name}</strong>

                        </td>

                        <td align="center">
                          {Number(item.price).toLocaleString()} đ
                        </td>

                        <td align="center">

                          <button onClick={() => handleDecrease(item)}>-</button>

                          <span style={{ margin: "0 12px" }}>
                            {item.quantity}
                          </span>

                          <button onClick={() => handleIncrease(item)}>+</button>

                        </td>

                        <td align="center">
                          {(item.price * item.quantity).toLocaleString()} đ
                        </td>

                        <td align="center">

                          <button
                            onClick={() => handleRemove(item.id)}
                            style={{ color: "#d32f2f" }}
                          >
                            Xóa
                          </button>

                        </td>

                      </tr>

                    ))

                  }

                </tbody>

              </table>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "40px"
                }}
              >

                <Link
                  to="/user/products"
                  style={{
                    color: "#006241",
                    textDecoration: "none",
                    fontWeight: "600"
                  }}
                >
                  ← Tiếp tục mua sắm
                </Link>

                <div style={{ textAlign: "right" }}>

                  <h2>
                    Tổng cộng:
                    <span style={{ color: "#006241" }}>
                      {" "}
                      {total.toLocaleString()} đ
                    </span>
                  </h2>

                  <Link
                    to="/user/checkout"
                    style={{
                      display: "inline-block",
                      marginTop: "20px",
                      padding: "14px 28px",
                      background: "#006241",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "10px"
                    }}
                  >
                    Tiến hành thanh toán
                  </Link>

                </div>

              </div>

            </>

          )

        }

      </div>

    </div>

  );

}
