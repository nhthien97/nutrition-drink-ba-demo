export const formatCurrency = (value = 0) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);

export const getOrderTotal = (order) =>
  Number(order.total ?? order.totalPrice ?? order.amount ?? 0);

export const getRevenue = (orders = []) =>
  orders.reduce((sum, order) => sum + getOrderTotal(order), 0);

export const getRevenueByWeekday = (orders = []) => {
  const revenue = Array(7).fill(0);

  orders.forEach((order) => {
    if (!order.date) return;

    const date = new Date(order.date);

    if (Number.isNaN(date.getTime())) return;

    const index = date.getDay() === 0 ? 6 : date.getDay() - 1;

    revenue[index] += getOrderTotal(order);
  });

  return revenue;
};

export const getTopProducts = (orders = [], limit = 5) => {
  const map = {};

  orders.forEach((order) => {
    (order.items || []).forEach((item) => {
      const name = item.name || item.productName;
      if (!name) return;

      map[name] = (map[name] || 0) + Number(item.quantity || item.qty || 1);
    });
  });

  return Object.entries(map)
    .map(([name, sold]) => ({ name, sold }))
    .sort((a, b) => b.sold - a.sold)
    .slice(0, limit);
};

export const getTopCustomers = (orders = [], limit = 5) => {
  const map = {};

  orders.forEach((order) => {
    const name =
      order.customerName ||
      order.customer ||
      order.customer_id ||
      "Khách lẻ";

    if (!map[name]) {
      map[name] = {
        name,
        orders: 0,
        points: 0,
        spending: 0,
      };
    }

    map[name].orders += 1;
    map[name].spending += getOrderTotal(order);
    map[name].points += Math.round(getOrderTotal(order) / 10000);
  });

  return Object.values(map)
    .sort((a, b) => b.points - a.points)
    .slice(0, limit);
};

export const getOrderStatus = (orders = []) => {
  const total = orders.length || 1;

  const completed = orders.filter((o) =>
    ["completed", "done", "success", "Đã giao"].includes(o.status)
  ).length;

  const processing = orders.filter((o) =>
    ["processing", "pending", "Đang xử lý"].includes(o.status)
  ).length;

  const cancelled = orders.filter((o) =>
    ["cancelled", "Đã hủy"].includes(o.status)
  ).length;

  return [
    {
      name: "Hoàn thành",
      value: completed,
      percent: Math.round((completed / total) * 100),
      color: "#22c55e",
    },
    {
      name: "Đang xử lý",
      value: processing,
      percent: Math.round((processing / total) * 100),
      color: "#3b82f6",
    },
    {
      name: "Đã hủy",
      value: cancelled,
      percent: Math.round((cancelled / total) * 100),
      color: "#ef4444",
    },
  ];
};

export const getLowStockProducts = (products = [], threshold = 20) =>
  [...products]
    .filter((item) => Number(item.stock || 0) <= threshold)
    .sort((a, b) => Number(a.stock || 0) - Number(b.stock || 0));

export const getExpiryIngredients = (ingredients = [], days = 30) =>
  [...ingredients]
    .filter((item) => {
      if (!item.expiryDate) return false;

      const diff =
        (new Date(item.expiryDate).getTime() - Date.now()) /
        (1000 * 60 * 60 * 24);

      return diff <= days;
    })
    .sort(
      (a, b) =>
        new Date(a.expiryDate).getTime() -
        new Date(b.expiryDate).getTime()
    );
