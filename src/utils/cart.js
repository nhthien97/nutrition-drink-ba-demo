const CART_KEY = "nutrition_cart";

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product) {
  const cart = getCart();

  const index = cart.findIndex(item => item.id === product.id);

  if (index >= 0) {
    cart[index].quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart(cart);
}

export function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

export function updateQuantity(id, quantity) {
  const cart = getCart();

  const item = cart.find(p => p.id === id);

  if (!item) return;

  item.quantity = quantity;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}

export function getItemCount() {
  return getCart().reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

export function getTotalPrice() {
  return getCart().reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}
