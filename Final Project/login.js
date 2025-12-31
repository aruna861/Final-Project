
window.socialLogin = function(provider) {
   
    const userData = {
        name: "Tech User",
        email: "user@techgalaxy.com",
        pic: "https://via.placeholder.com/150", 
        joined: new Date().toLocaleDateString()
    };

   
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');

    alert("Logged in successfully!");
    window.location.href = "Index.html";
};
function showToast(message) {
    const toast = document.getElementById('custom-alert');
    const msgSpan = document.getElementById('alert-message');
    
    msgSpan.innerText = message;
    toast.classList.add('active');


    setTimeout(() => {
        toast.classList.remove('active');
        window.location.href = "Index.html";
    }, 3000);
}


window.socialLogin = function(provider) {
    const userData = {
        name: "Tech User",
        email: "user@techgalaxy.com",
        pic: "https://via.placeholder.com/150",
        joined: new Date().toLocaleDateString()
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');


    showToast("Logged in successfully!");
};

function showToast(message) {
    const toast = document.getElementById('custom-alert');
    const msgSpan = document.getElementById('alert-message');
    
    if (toast && msgSpan) {
        msgSpan.innerText = message;
        toast.classList.add('active');

   
        setTimeout(() => {
            toast.classList.remove('active');
            window.location.href = "Index.html";
        }, 2500);
    }
}


window.socialLogin = function(provider) {

    const userData = {
        name: "Tech Explorer",
        email: "user@techgalaxy.com",
        pic: "https://via.placeholder.com/150",
        joined: new Date().toLocaleDateString()
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');


    showToast("Logged in successfully!");
};


document.getElementById('auth-login-form').onsubmit = function(e) {
    e.preventDefault(); 
    window.socialLogin('Manual');
};

function showGalaxyToast(message) {
    const toast = document.getElementById('custom-alert');
    const msg = document.getElementById('alert-message');
    
    msg.innerText = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
        window.location.href = "Index.html";
    }, 3000);
}

window.socialLogin = function(provider) {

    const user = {
        name: "Tech Explorer",
        email: "user@techgalaxy.com",
        pic: "https://via.placeholder.com/150"
    };

    localStorage.setItem('userData', JSON.stringify(user));
    
 
    showGalaxyToast("Warp Speed Engaged: Welcome!");
};


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('auth-login-form');
    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault(); 
            window.socialLogin('Manual');
        };
    }
});