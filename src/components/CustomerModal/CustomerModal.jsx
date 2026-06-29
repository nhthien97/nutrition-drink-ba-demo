import { useState,useEffect } from "react";
import "./CustomerModal.css";

function CustomerModal({
  customer,
  isOpen,
  onClose,
  onSave,
  onDelete
}){

  const [form,setForm]=useState({
    id:0,
    name:"",
    phone:"",
    email:"",
    point:0,
    orders:0
  });

  useEffect(()=>{

    if(customer){

      setForm(customer);

    }

  },[customer]);

  if(!isOpen) return null;

  const handleChange=(e)=>{

    const {name,value}=e.target;

    setForm({

      ...form,

      [name]:
      name==="point"||name==="orders"
      ? Number(value)
      : value

    });

  };

  return(

    <div className="modal-overlay">

      <div className="modal">

        <h2>Thông tin khách hàng</h2>

        <label>Họ tên</label>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label>Số điện thoại</label>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <label>Email</label>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Điểm tích lũy</label>

        <input
          type="number"
          name="point"
          value={form.point}
          onChange={handleChange}
        />

        <label>Số đơn hàng</label>

        <input
          type="number"
          name="orders"
          value={form.orders}
          onChange={handleChange}
        />

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

export default CustomerModal;
