import { useState, useEffect } from "react";
import "./OrderModal.css";

function OrderModal({
  order,
  isOpen,
  onClose,
  onSave,
  onDelete
}) {

  const [form,setForm]=useState({
    id:0,
    customer:"",
    date:"",
    total:0,
    status:"Chờ xác nhận"
  });

  useEffect(()=>{

    if(order){

      setForm(order);

    }

  },[order]);

  if(!isOpen) return null;

  const handleChange=(e)=>{

    const {name,value}=e.target;

    setForm({

      ...form,

      [name]:
        name==="total"
          ? Number(value)
          : value

    });

  };

  return(

    <div className="modal-overlay">

      <div className="modal">

        <h2>Chi tiết đơn hàng</h2>

        <label>Khách hàng</label>

        <input
          name="customer"
          value={form.customer}
          onChange={handleChange}
        />

        <label>Ngày đặt</label>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <label>Tổng tiền</label>

        <input
          type="number"
          name="total"
          value={form.total}
          onChange={handleChange}
        />

        <label>Trạng thái</label>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
        >

          <option>Chờ xác nhận</option>

          <option>Đang pha chế</option>

          <option>Đang giao</option>

          <option>Hoàn thành</option>

        </select>

        <div className="modal-buttons">

          <button
            className="save-btn"
            onClick={()=>onSave(form)}
          >
            Lưu
          </button>

          <button
            className="delete-btn"
            onClick={()=>onDelete(form.id)}
          >
            Xóa
          </button>

          <button
            className="close-btn"
            onClick={onClose}
          >
            Đóng
          </button>

        </div>

      </div>

    </div>

  );

}

export default OrderModal;
