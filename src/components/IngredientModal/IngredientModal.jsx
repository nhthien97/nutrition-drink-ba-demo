import { useState,useEffect } from "react";
import "./IngredientModal.css";

function IngredientModal({

    ingredient,

    isOpen,

    onClose,

    onSave,

    onDelete

}){

    const [form,setForm]=useState({

        id:0,

        name:"",

        stock:0,

        unit:"kg",

        expiry:""

    });

    useEffect(()=>{

        if(ingredient){

            setForm(ingredient);

        }

    },[ingredient]);

    if(!isOpen) return null;

    const handleChange=(e)=>{

        const {name,value}=e.target;

        setForm({

            ...form,

            [name]:value

        });

    };

    return(

        <div className="modal-overlay">

            <div className="modal">

                <h2>Thông tin nguyên liệu</h2>

                <label>Tên</label>

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />

                <label>Tồn kho</label>

                <input
                    name="stock"
                    type="number"
                    value={form.stock}
                    onChange={handleChange}
                />

                <label>Đơn vị</label>

                <input
                    name="unit"
                    value={form.unit}
                    onChange={handleChange}
                />

                <label>Hạn sử dụng</label>

                <input
                    type="date"
                    name="expiry"
                    value={form.expiry}
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

export default IngredientModal;
