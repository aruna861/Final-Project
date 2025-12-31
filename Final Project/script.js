function filterItems() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let list = document.getElementById('itemList');
    let items = list.getElementsByTagName('li');

    // Show list only if there is text typed
    if (filter.length > 0) {
        list.style.display = "block";
    } else {
        list.style.display = "none";
        return;
    }

    let hasMatches = false;
    for (let i = 0; i < items.length; i++) {
        let text = items[i].textContent || items[i].innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            items[i].style.display = "block"; 
            hasMatches = true;
            
            // YouTube-style: Click the item to go to the link immediately
            items[i].onclick = function() {
                window.location.href = this.getAttribute('data-url');
            };
        } else {
            items[i].style.display = "none";
        }
    }

    // Hide the whole list if no matches found at all
    if (!hasMatches) {
        list.style.display = "none";
    }
}

// Redirect on Enter Key
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let inputVal = this.value.toLowerCase();
        let items = document.getElementById('itemList').getElementsByTagName('li');

        for (let i = 0; i < items.length; i++) {
            let itemText = items[i].textContent.toLowerCase();
            let targetUrl = items[i].getAttribute('data-url');

            // Logic: If the item contains what you typed, go there
            if (itemText.includes(inputVal)) {
                window.location.href = targetUrl;
                return;
            }
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const accountBtn = document.querySelector('.my-account');

    if (accountBtn) {
        accountBtn.onclick = function(e) {
            e.preventDefault();
            const userData = localStorage.getItem('userData');
            
            if (userData) {
                // If data exists, they are "logged in", show profile
                window.location.href = "profile.html"; 
            } else {
                // Otherwise, show login
                window.location.href = "login.html"; 
            }
        };
    }
});
document.querySelector('.buy').addEventListener('click', () => {
            // 1. Create the Order Data
            const newOrder = {
                id: "GXY-" + Math.floor(Math.random() * 9000 + 1000),
                name: "Galaxy Tech Premium",
                price: "$1,299.00",
                date: new Date().toLocaleDateString(),
                status: "Processing"
            };

            // 2. Save to LocalStorage
            let orders = JSON.parse(localStorage.getItem('userOrders')) || [];
            orders.unshift(newOrder); // Add to top
            localStorage.setItem('userOrders', JSON.stringify(orders));

            // 3. Feedback and Redirect
            alert("Order Placed Successfully!");
            window.location.href = "orders.html"; 
        });
        