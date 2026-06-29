import { useState } from "react";
import "./Customers.css";

import customersData from "../../data/customers";
import CustomerModal from "../../components/CustomerModal/CustomerModal";

const emptyCustomer={
    id:0,
    name:"",
    phone:"",
    email:"",
    point:0,
    orders:0
};

function Customers(){

    const [customers,setCustomers]=useState(customersData);

    const [selectedCustomer,setSelectedCustomer]=useState(null);

    const [isOpen,setIsOpen]=useState(false);

    const [isNew,setIsNew]=useState(false);

    const handleView=(customer)=>{

        setSelectedCustomer(customer);

        setIsNew(false);

        setIsOpen(true);

    };

    const handleAdd=()=>{

        setSelectedCustomer(emptyCustomer);

        setIsNew(true);

        setIsOpen(true);

    };

    const handleClose=()=>{

        setIsOpen(false);

        setIsNew(false);

    };

    const handleSave=(customer)=>{

        if(isNew){

            const newCustomer={

                ...customer,

                id:Math.max(...customers.map(c=>c.id))+1

            };

            setCustomers([...customers,newCustomer]);

        }else{

            setCustomers(

                customers.map(c=>

                    c.id===customer.id

                    ? customer

                    : c

                )

            );

        }

        setIsOpen(false);

        setIsNew(false);

    };

    const handleDelete=(id)=>{

        if(!window.confirm("Bạn có chắc muốn xóa khách hàng này?")) return;

        setCustomers(

            customers.filter(c=>c.id!==id)

        );

        setIsOpen(false);

    };

    return(

        <div>

            <div className="page-header">

                <h2>

                    Quản lý khách hàng

                </h2>

                <button onClick={handleAdd}>

                    + Thêm khách hàng

                </button>

            </div>

            <table className="product-table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Khách hàng</th>

                        <th>SĐT</th>

                        <th>Email</th>

                        <th>Điểm</th>

                        <th>Đơn hàng</th>

                        <th>Thao tác</th>

                    </tr>

                </thead>

                <tbody>

                    {customers.map(customer=>(

                        <tr key={customer.id}>

                            <td>{customer.id}</td>

                            <td>{customer.name}</td>

                            <td>{customer.phone}</td>

                            <td>{customer.email}</td>

                            <td>{customer.point}</td>

                            <td>{customer.orders}</td>

                            <td>

                                <button
                                onClick={()=>handleView(customer)}
                                >
                                Xem
                                </button>

                                <button
                                onClick={()=>handleView(customer)}
                                >
                                Sửa
                                </button>

                                <button
                                onClick={()=>handleDelete(customer.id)}
                                >
                                Xóa
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            <CustomerModal

                customer={selectedCustomer}

                isOpen={isOpen}

                onClose={handleClose}

                onSave={handleSave}

                onDelete={handleDelete}

            />

        </div>

    );

}

export default Customers;
