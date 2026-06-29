import { useState } from "react";
import "./Products.css";

import productsData from "../../data/products";
import ProductModal from "../../components/ProductModal/ProductModal";

const emptyProduct = {
  id: 0,
  name: "",
  price: 0,
};

function Products() {
  const [products, setProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const handleView = (product) => {
    setSelectedProduct(product);
    setIsNew(false);
    setIsOpen(true);
  };

  const handleAdd = () => {
    setSelectedProduct(emptyProduct);
    setIsNew(true);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsNew(false);
  };

  const handleSave = (product) => {

    if (isNew) {

      const newProduct = {
        ...product,
        id: products.length
          ? Math.max(...products.map(p => p.id)) + 1
          : 1
      };

      setProducts([...products, newProduct]);

    } else {

      setProducts(
        products.map(p =>
          p.id === product.id ? product : p
        )
      );

    }

    setIsOpen(false);
    setIsNew(false);
  };

  const handleDelete = (id) => {

    if (!window.confirm("Bạn có chắc muốn xóa?"))
      return;

    setProducts(
      products.filter(p => p.id !== id)
    );

    setIsOpen(false);

  };

  return (

    <div>

      <div className="page-header">

        <h2>Quản lý sản phẩm</h2>

        <button onClick={handleAdd}>
          + Thêm sản phẩm
        </button>

      </div>

      <table className="product-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Tên sản phẩm</th>

            <th>Giá</th>

            <th>Thao tác</th>

          </tr>

        </thead>

        <tbody>

          {products.map(product => (

            <tr key={product.id}>

              <td>{product.id}</td>

              <td>{product.name}</td>

              <td>{product.price.toLocaleString()} đ</td>

              <td>

                <button
                  onClick={() => handleView(product)}
                >
                  Xem
                </button>

                <button
                  onClick={() => handleView(product)}
                >
                  Sửa
                </button>

                <button
                  onClick={() => handleDelete(product.id)}
                >
                  Xóa
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <ProductModal
        product={selectedProduct}
        isOpen={isOpen}
        onClose={handleClose}
        onSave={handleSave}
        onDelete={handleDelete}
      />

    </div>

  );

}

export default Products;
