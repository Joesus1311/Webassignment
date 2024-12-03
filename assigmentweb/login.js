document.querySelector(".btn.btn-primary").addEventListener("click", function (e) {
    e.preventDefault();

    
    const username = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;

    
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        
        localStorage.setItem("currentUser", JSON.stringify(user));

        alert(`Welcome back, ${user.username}!`);
        window.location.href = "profile.html"; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
