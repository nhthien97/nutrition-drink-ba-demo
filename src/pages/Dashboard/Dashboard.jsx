import "./Dashboard.css";

import products from "../../data/products";
import orders from "../../data/orders";
import customers from "../../data/customers";
import ingredients from "../../data/ingredients";

import {
  KPIGrid,
  RevenueAnalytics,
  TopProducts,
  TopCustomers,
  LowStock,
  ExpiryWarning,
} from "../../components/Analytics";

import RecentOrders from "../../components/RecentOrders/RecentOrders";

export default function Dashboard() {
  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  return (
    <div className="dashboard-page">

      <div className="dashboard-header">

        <div>
          <h1>Business Dashboard</h1>

          <p>
            Tổng quan hoạt động kinh doanh nước uống dinh dưỡng an toàn
          </p>
        </div>

      </div>

      <KPIGrid
        revenue={totalRevenue}
        totalOrders={orders.length}
        totalCustomers={customers.length}
        totalProducts={products.length}
      />

      <div className="dashboard-row dashboard-row-large">

        <RevenueAnalytics
          orders={orders}
        />

        <RecentOrders />

      </div>

      <div className="dashboard-row">

        <TopProducts
          products={products}
        />

        <TopCustomers
          customers={customers}
        />

      </div>

      <div className="dashboard-row">

        <LowStock
          ingredients={ingredients}
        />

        <ExpiryWarning
          ingredients={ingredients}
        />

      </div>

    </div>
  );
}
