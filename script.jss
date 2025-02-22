// script.js

// Function to add product to wishlist using localStorage
function addToWishlist(productId) {
  // Find the product element based on data attribute
  const productElement = document.querySelector(`.product-item[data-id='${productId}']`);
  const productName = productElement.getAttribute('data-name');
  const productPrice = productElement.getAttribute('data-price');

  // Retrieve wishlist from localStorage or initialize as empty array
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Prevent duplicate entries
  if (wishlist.some(item => item.id == productId)) {
    alert(`${productName} is already in your wishlist!`);
    return;
  }

  // Add product to wishlist
  wishlist.push({
    id: productId,
    name: productName,
    price: productPrice
  });
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  alert(`${productName} has been added to your wishlist!`);
}

// Placeholder function for adding a product to cart
function addToCart(productId) {
  alert(`Product ${productId} added to cart!`);
}

// Placeholder function simulating a payment gateway integration
function startPayment() {
  alert('Redirecting to payment gateway...');
  // Here you would integrate with your chosen payment gateway API
}


