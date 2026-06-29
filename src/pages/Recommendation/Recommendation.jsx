import { useState } from "react";
import "./Recommendation.css";
import products from "../../data/products";

function Recommendation() {

  const [goal,setGoal]=useState("Tất cả");

  const filterProducts=()=>{

    if(goal==="Tất cả") return products;

    return products.filter(product=>{

      const name=product.name.toLowerCase();

      switch(goal){

        case "Giảm cân":
          return name.includes("detox") || name.includes("táo") || name.includes("cam");

        case "Tăng cơ":
          return name.includes("protein") || name.includes("chuối");

        case "Detox":
          return name.includes("detox");

        case "Vitamin":
          return name.includes("cam") || name.includes("dứa");

        case "Healthy":
          return true;

        default:
          return true;
      }

    });

  };

  return(

    <div>

      <div className="page-header">

        <h2>Gợi ý sản phẩm</h2>

      </div>

      <div className="recommend-box">

        <label>Mục tiêu sức khỏe</label>

        <select
          value={goal}
          onChange={(e)=>setGoal(e.target.value)}
        >

          <option>Tất cả</option>
          <option>Giảm cân</option>
          <option>Tăng cơ</option>
          <option>Detox</option>
          <option>Vitamin</option>
          <option>Healthy</option>

        </select>

      </div>

      <table className="product-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Tên sản phẩm</th>

            <th>Giá</th>

          </tr>

        </thead>

        <tbody>

          {filterProducts().map(product=>(

            <tr key={product.id}>

              <td>{product.id}</td>

              <td>{product.name}</td>

              <td>{product.price.toLocaleString()} đ</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Recommendation;
