//cart-icon message logic
 var cartIcons = document.querySelectorAll(".cart-icon");
  // Function to show the cart message
  function showCartMessage() {
    alert("Cart option is not implemented due to being a single-page website.");
  }
  // Add a click event listener to each cart icon
  cartIcons.forEach(function (icon) {
    icon.addEventListener("click", showCartMessage);
  });

        