document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("No user is logged in. Redirecting to login page.");
        window.location.href = "login.html";
        return;
    }

    document.querySelector('input[type="text"]').value = currentUser.username || "";
    document.querySelector('input[type="email"]').value = currentUser.email || "";
});

document.querySelector(".update-info").addEventListener("click", function (e) {
    e.preventDefault();

    const updatedFullName = document.querySelector('input[type="text"]').value.trim();
    const updatedEmail = document.querySelector('input[type="email"]').value.trim();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userIndex = users.findIndex(user => user.username === currentUser.username);

        if (userIndex !== -1) {
            users[userIndex].username = updatedFullName;
            users[userIndex].email = updatedEmail;
        }

        currentUser.username = updatedFullName;
        currentUser.email = updatedEmail;

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account information updated successfully!");
    } else {
        alert("Error: Unable to update information. Please try again.");
    }
});

document.querySelector(".logout").addEventListener("click", function () {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
});
