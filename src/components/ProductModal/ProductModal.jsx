import { useState, useEffect } from "react";
import "./ProductModal.css";

function ProductModal({
  product,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) {

  const [form,setForm]=useState({
    id:0,
    name:"",
    price:0
  });

  useEffect(()=>{

    if(product){

      setForm(product);

    }

  },[product]);

  if(!isOpen) return null;

  const handleChange=(e)=>{

    const {name,value}=e.target;

    setForm({

      ...form,

      [name]:name==="price"

      ? Number(value)

      : value

    });

  };

  return(

    <div className="modal-overlay">

      <div className="modal">

        <h2>

          Chi tiết sản phẩm

        </h2>

        <label>

          Tên sản phẩm

        </label>

        <input

          name="name"

          value={form.name}

          onChange={handleChange}

        />

        <label>

          Giá

        </label>

        <input

          type="number"

          name="price"

          value={form.price}

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

export default ProductModal;
