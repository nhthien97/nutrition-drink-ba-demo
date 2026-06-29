import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Ingredients from "../pages/Ingredients/Ingredients";
import Orders from "../pages/Orders/Orders";
import Customers from "../pages/Customers/Customers";
import Recommendation from "../pages/Recommendation/Recommendation";
import Reports from "../pages/Reports/Reports";

import Home from "../pages/User/Home/Home";
import UserProducts from "../pages/User/Products/Products";
import ProductDetail from "../pages/User/ProductDetail/ProductDetail";

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================= USER ================= */}

        <Route
          path="/user"
          element={<Home />}
        />

        <Route
          path="/user/products"
          element={<UserProducts />}
        />

        <Route
          path="/user/product/:id"
          element={<ProductDetail />}
        />

        {/* Các route này sẽ tạo ở bước sau */}

        <Route
          path="/user/cart"
          element={<div>Cart Coming Soon</div>}
        />

        <Route
          path="/user/checkout"
          element={<div>Checkout Coming Soon</div>}
        />

        <Route
          path="/user/tracking"
          element={<div>Tracking Coming Soon</div>}
        />

        {/* ================= ADMIN ================= */}

        <Route
          path="/"
          element={<MainLayout />}
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="products"
            element={<Products />}
          />

          <Route
            path="ingredients"
            element={<Ingredients />}
          />

          <Route
            path="orders"
            element={<Orders />}
          />

          <Route
            path="customers"
            element={<Customers />}
          />

          <Route
            path="recommendation"
            element={<Recommendation />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
