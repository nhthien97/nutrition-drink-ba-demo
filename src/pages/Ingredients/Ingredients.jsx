import { useState } from "react";
import "./Ingredients.css";

import ingredientsData from "../../data/ingredients";
import IngredientModal from "../../components/IngredientModal/IngredientModal";

const emptyIngredient = {
  id: 0,
  name: "",
  stock: 0,
  unit: "kg",
  expiry: ""
};

function Ingredients() {

  const [ingredients, setIngredients] = useState(ingredientsData);

  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const [isNew, setIsNew] = useState(false);

  const handleView = (ingredient) => {

    setSelectedIngredient(ingredient);

    setIsNew(false);

    setIsOpen(true);

  };

  const handleAdd = () => {

    setSelectedIngredient(emptyIngredient);

    setIsNew(true);

    setIsOpen(true);

  };

  const handleClose = () => {

    setIsOpen(false);

    setIsNew(false);

  };

  const handleSave = (ingredient) => {

    if (isNew) {

      const newIngredient = {

        ...ingredient,

        id:
          ingredients.length > 0
            ? Math.max(...ingredients.map(i => i.id)) + 1
            : 1

      };

      setIngredients([
        ...ingredients,
        newIngredient
      ]);

    } else {

      setIngredients(

        ingredients.map(i =>

          i.id === ingredient.id

            ? ingredient

            : i

        )

      );

    }

    setIsOpen(false);

    setIsNew(false);

  };

  const handleDelete = (id) => {

    if (!window.confirm("Bạn có chắc muốn xóa nguyên liệu này?"))
      return;

    setIngredients(

      ingredients.filter(i => i.id !== id)

    );

    setIsOpen(false);

  };

  return (

    <div>

      <div className="page-header">

        <h2>

          Quản lý nguyên liệu

        </h2>

        <button onClick={handleAdd}>

          + Nhập nguyên liệu

        </button>

      </div>

      <table className="product-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Tên nguyên liệu</th>

            <th>Tồn kho</th>

            <th>Đơn vị</th>

            <th>Hạn sử dụng</th>

            <th>Thao tác</th>

          </tr>

        </thead>

        <tbody>

          {ingredients.map(item => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.name}</td>

              <td>{item.stock}</td>

              <td>{item.unit}</td>

              <td>{item.expiry}</td>

              <td>

                <button
                  onClick={() => handleView(item)}
                >
                  Xem
                </button>

                <button
                  onClick={() => handleView(item)}
                >
                  Sửa
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                >
                  Xóa
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <IngredientModal

        ingredient={selectedIngredient}

        isOpen={isOpen}

        onClose={handleClose}

        onSave={handleSave}

        onDelete={handleDelete}

      />

    </div>

  );

}

export default Ingredients;
