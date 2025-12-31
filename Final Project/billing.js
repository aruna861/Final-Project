

const bankSkins = {
    BOC: "linear-gradient(135deg, #ffcc00, #b8860b)",
    SAMPATH: "linear-gradient(135deg, #ed1c24, #7a0000)",
    COMM: "linear-gradient(135deg, #00aeef, #005a80)"
};

function applyBankTheme() {
    const selected = document.getElementById('bankSelect').value;
    document.getElementById('cardGraphic').style.background = bankSkins[selected];
    document.getElementById('vBankName').innerText = selected;
}

function showGalaxyBar(title, message, type = 'success') {
    const toast = document.getElementById('galaxy-toast');
    const icon = document.getElementById('g-toast-icon');
    
    document.getElementById('g-toast-title').innerText = title;
    document.getElementById('g-toast-msg').innerText = message;

    if (type === 'success') {
        toast.style.borderLeftColor = "#10b981";
        icon.className = "fas fa-check-circle";
        icon.style.color = "#10b981";
    } else {
        toast.style.borderLeftColor = "#ffb400";
        icon.className = "fas fa-exclamation-triangle";
        icon.style.color = "#ffb400";
    }

    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3000);
}

function processOrder() {
    const cardNum = document.getElementById('inNum').value.replace(/\s/g, '');

    if (cardNum.length < 16) {
        showGalaxyBar("Security Alert", "Please enter a valid card number.", "error");
        return;
    }


    const orderData = {
        id: "GXY-" + Math.floor(Math.random() * 900000 + 100000),
        name: document.getElementById('deviceName').innerText,
        total: document.getElementById('finalTotal').innerText,
        date: new Date().toLocaleDateString(),
        status: "Confirmed"
    };

    let orders = JSON.parse(localStorage.getItem('userOrders')) || [];
    orders.unshift(orderData);
    localStorage.setItem('userOrders', JSON.stringify(orders));

    showGalaxyBar("Payment Success", "Adding order to your hangar...", "success");

    setTimeout(() => {
        window.location.href = "orders.html";
    }, 2500);
}


document.getElementById('inNum').addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').match(/.{1,4}/g)?.join(' ') || '';
    e.target.value = val;
    document.getElementById('vNumDisp').innerText = val || "#### #### #### ####";
});

document.getElementById('inName').addEventListener('input', (e) => {
    document.getElementById('vNameDisp').innerText = e.target.value.toUpperCase() || "YOUR NAME";
});

document.getElementById('inExp').addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').replace(/(.{2})/, '$1/');
    e.target.value = val;
    document.getElementById('vExpDisp').innerText = val || "MM/YY";
});