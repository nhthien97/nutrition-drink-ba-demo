import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Ingredients from "../pages/Ingredients/Ingredients";
import Orders from "../pages/Orders/Orders";
import Customers from "../pages/Customers/Customers";
import Recommendation from "../pages/Recommendation/Recommendation";
import Reports from "../pages/Reports/Reports";

function AppRouter(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<MainLayout/>}>

<Route index element={<Dashboard/>}/>

<Route path="products" element={<Products/>}/>

<Route path="ingredients" element={<Ingredients/>}/>

<Route path="orders" element={<Orders/>}/>

<Route path="customers" element={<Customers/>}/>

<Route path="recommendation" element={<Recommendation/>}/>

<Route path="reports" element={<Reports />} />

</Route>

</Routes>

</BrowserRouter>

);

}

export default AppRouter;
