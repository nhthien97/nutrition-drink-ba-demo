import { useState } from "react";
import "./Orders.css";

import ordersData from "../../data/orders";
import OrderModal from "../../components/OrderModal/OrderModal";

const emptyOrder = {
  id: 0,
  customer: "",
  date: "",
  total: 0,
  status: "Chờ xác nhận"
};

function Orders() {

  const [orders,setOrders] = useState(ordersData);

  const [selectedOrder,setSelectedOrder] = useState(null);

  const [isOpen,setIsOpen] = useState(false);

  const [isNew,setIsNew] = useState(false);

  const handleView=(order)=>{

    setSelectedOrder(order);

    setIsNew(false);

    setIsOpen(true);

  };

  const handleAdd=()=>{

    setSelectedOrder(emptyOrder);

    setIsNew(true);

    setIsOpen(true);

  };

  const handleClose=()=>{

    setIsOpen(false);

    setIsNew(false);

  };

  const handleSave=(order)=>{

    if(isNew){

      const newOrder={

        ...order,

        id:Math.max(...orders.map(o=>o.id))+1

      };

      setOrders([...orders,newOrder]);

    }else{

      setOrders(

        orders.map(o=>

          o.id===order.id

          ? order

          : o

        )

      );

    }

    setIsOpen(false);

    setIsNew(false);

  };

  const handleDelete=(id)=>{

    if(!window.confirm("Bạn có chắc muốn xóa đơn hàng này?")) return;

    setOrders(

      orders.filter(o=>o.id!==id)

    );

    setIsOpen(false);

  };

  return(

    <div>

      <div className="page-header">

        <h2>Quản lý đơn hàng</h2>

        <button onClick={handleAdd}>

          + Tạo đơn hàng

        </button>

      </div>

      <table className="product-table">

        <thead>

          <tr>

            <th>Mã đơn</th>

            <th>Khách hàng</th>

            <th>Ngày đặt</th>

            <th>Tổng tiền</th>

            <th>Trạng thái</th>

            <th>Thao tác</th>

          </tr>

        </thead>

        <tbody>

          {orders.map(order=>(

            <tr key={order.id}>

              <td>#{order.id}</td>

              <td>{order.customer}</td>

              <td>{order.date}</td>

              <td>{order.total.toLocaleString()} đ</td>

              <td>

                <span className={`status ${order.status.replace(/\s/g,"")}`}>

                  {order.status}

                </span>

              </td>

              <td>

                <button

                  onClick={()=>handleView(order)}

                >

                  Xem

                </button>

                <button

                  onClick={()=>handleView(order)}

                >

                  Sửa

                </button>

                <button

                  onClick={()=>handleDelete(order.id)}

                >

                  Xóa

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <OrderModal

        order={selectedOrder}

        isOpen={isOpen}

        onClose={handleClose}

        onSave={handleSave}

        onDelete={handleDelete}

      />

    </div>

  );

}

export default Orders;
