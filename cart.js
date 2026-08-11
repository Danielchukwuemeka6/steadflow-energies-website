// SteadFlow Market — cart logic
// Uses localStorage so the cart survives a page refresh, without needing a
// backend yet. When accounts/checkout move server-side, swap the storage
// calls below for API calls — the function names can stay the same.

const CART_KEY = "steadflow_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  cart[productId] = (cart[productId] || 0) + qty;
  saveCart(cart);
}

function setQty(productId, qty) {
  const cart = getCart();
  if (qty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = qty;
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart();
  delete cart[productId];
  saveCart(cart);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}

function cartItemCount() {
  const cart = getCart();
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function cartLineItems() {
  const cart = getCart();
  return Object.entries(cart)
    .map(([id, qty]) => {
      const product = typeof getProductById === "function" ? getProductById(id) : null;
      if (!product) return null;
      return { product, qty, lineTotal: product.price * qty };
    })
    .filter(Boolean);
}

function cartTotal() {
  return cartLineItems().reduce((sum, item) => sum + item.lineTotal, 0);
}

function updateCartBadge() {
  const count = cartItemCount();
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
    el.hidden = count === 0;
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
