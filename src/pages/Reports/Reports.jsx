import "./Reports.css";

import products from "../../data/products";
import orders from "../../data/orders";
import customers from "../../data/customers";
import ingredients from "../../data/ingredients";

import {
  KPIGrid,
  RevenueAnalytics,
  OrderStatus,
  TopProducts,
  TopCustomers,
  LowStock,
  ExpiryWarning,
} from "../../components/Analytics";

export default function Reports() {
  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  return (
    <div className="reports-page">

      <div className="reports-header">

        <div>
          <h1>Business Analytics Dashboard</h1>

          <p>
            Báo cáo thống kê mô hình kinh doanh nước uống dinh dưỡng an toàn
          </p>
        </div>

      </div>

      <KPIGrid
        revenue={totalRevenue}
        totalOrders={orders.length}
        totalCustomers={customers.length}
        totalProducts={products.length}
      />

      <div className="reports-row reports-row-large">

        <RevenueAnalytics orders={orders} />

        <OrderStatus orders={orders} />

      </div>

      <div className="reports-row">

        <TopProducts products={products} />

        <TopCustomers customers={customers} />

      </div>

      <div className="reports-row">

        <LowStock ingredients={ingredients} />

        <ExpiryWarning ingredients={ingredients} />

      </div>

    </div>
  );
}
