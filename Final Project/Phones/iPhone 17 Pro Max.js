

 function buyProduct() {
      alert("✅ Product added to cart!\nProceed to payment.");
    }
    function buyProduct() {
    let confirmBuy = confirm("Do you want to buy this product?");
    
    if (confirmBuy) {
      alert("🎉 Purchase successful!");
    } else {
      alert("❌ Purchase cancelled");
    }
  }
   function goToPayment() {
    window.location.href = "payment.html";
  }
   function toggleMenu() {
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active');
    }
  document.querySelector('.buy').addEventListener('click', function() {
    // 1. Create the Order Object
    const newOrder = {
        id: "ORD-" + Math.floor(Math.random() * 9000 + 1000),
        name: "Galaxy Tech Premium",
        price: "$1,299.00",
        date: new Date().toLocaleDateString(),
        status: "Confirmed"
    };

    let orders = JSON.parse(localStorage.getItem('userOrders')) || [];

 
    orders.unshift(newOrder);

    localStorage.setItem('userOrders', JSON.stringify(orders));


    alert("Payment Successful! Redirecting to orders...");
    window.location.href = "orders.html"; 
});
