let selectedBank = "";

function selectBank(bank) {
  selectedBank = bank;
  document.querySelectorAll(".banks button")
    .forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
}

function payNow() {
  const card = document.getElementById("card").value;
  const exp = document.getElementById("exp").value;
  const cvc = document.getElementById("cvc").value;

  if (!selectedBank || !card || !exp || !cvc) {
    alert("Please fill all details");
    return;
  }

  document.getElementById("otpModal").style.display = "block";
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;

  if (otp.length !== 6) {
    alert("Invalid OTP");
    return;
  }

  document.getElementById("otpModal").style.display = "none";
  document.getElementById("receipt").style.display = "block";


  localStorage.setItem("lastOrder", "PAID");
}

function goOrders() {
  window.location.href = "my-orders.html";
}
function verifyOTP() {
  document.getElementById("otpModal").style.display = "none";
  document.getElementById("receipt").style.display = "flex";
}
document.getElementById("otpModal").style.display = "flex";


const payButton = document.querySelector('.buy');

payButton.addEventListener('click', function(e) {
   
    const newOrder = {
        id: "ORD-" + Math.floor(Math.random() * 1000000), 
        name: "Galaxy Tech Premium", 
        price: "$1,299.00",
        date: new Date().toLocaleDateString(),
        status: "Processing"
    };

   
    let orderHistory = JSON.parse(localStorage.getItem('userOrders')) || [];

   
    orderHistory.unshift(newOrder);

  
    localStorage.setItem('userOrders', JSON.stringify(orderHistory));

   
    alert("Payment Successful! Adding to your orders...");
    window.location.href = "orders.html"; 
});


document.addEventListener('DOMContentLoaded', () => {
 
    const buyBtn = document.querySelector('.buy');

    if (buyBtn) {
        buyBtn.addEventListener('click', (e) => {
         
            const orderData = {
                id: "GXY-" + Math.floor(Math.random() * 90000 + 10000), 
                name: "Galaxy Premium Tech", 
                price: "$1,299.00",
                date: new Date().toLocaleDateString('en-GB'), 
                status: "Confirmed"
            };
document.querySelector('.buy').addEventListener('click', () => {
           
            const newOrder = {
                id: "GXY-" + Math.floor(Math.random() * 9000 + 1000),
                name: "Galaxy Tech Premium",
                price: "$1,299.00",
                date: new Date().toLocaleDateString(),
                status: "Processing"
            };

        
            let orders = JSON.parse(localStorage.getItem('userOrders')) || [];
            orders.unshift(newOrder); 
            localStorage.setItem('userOrders', JSON.stringify(orders));

            
            alert("Order Placed Successfully!");
            window.location.href = "orders.html"; 
        array.forEach(element => {
          })
        });       //I could't find whhat is the error but code work normally.   //    
