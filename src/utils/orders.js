const ORDER_KEY = "nutrition_orders";

export function getOrders() {
  return JSON.parse(localStorage.getItem(ORDER_KEY)) || [];
}

export function saveOrders(orders) {
  localStorage.setItem(
    ORDER_KEY,
    JSON.stringify(orders)
  );
}

export function createOrder(order) {

  const orders = getOrders();

  const newOrder = {
    id: Date.now(),
    orderCode: "ND" + Date.now(),
    status: "Đang xử lý",
    createdAt: new Date().toISOString(),
    ...order
  };

  orders.unshift(newOrder);

  saveOrders(orders);

  return newOrder;
}

export function getOrderByCode(code) {
  return getOrders().find(
    item => item.orderCode === code
  );
}

export function updateOrderStatus(id, status) {

  const orders = getOrders();

  const order = orders.find(
    item => item.id === id
  );

  if (!order) return;

  order.status = status;

  saveOrders(orders);

}
