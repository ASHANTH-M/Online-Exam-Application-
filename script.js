

// // onclick run msg

function showAlert(message) {
    alert(message);
    
}



// Time display
function showTime() {
    const timeElement = document.getElementById("time");

    // time element illa na function stop; login code affect aagadhu
    if (!timeElement) return;

    const now = new Date();

    timeElement.textContent =
        now.getHours().toString().padStart(2, "0") + ":" +
        now.getMinutes().toString().padStart(2, "0") + ":" +
        now.getSeconds().toString().padStart(2, "0");
}

showTime();
setInterval(showTime, 1000);


// Login form
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Please fill all the fields!");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        alert("Login Successful!");
        loginForm.reset();
    });
}



