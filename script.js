// Run code after page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    setupContactFormValidation();
});




// 3. Simple contact form validation
function setupContactFormValidation() {
    var form = document.getElementById("contactForm");
    if (!form) return; // Only on contact page

    form.addEventListener("submit", function (event) {
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var messageInput = document.getElementById("message");
        var errorBox = document.getElementById("formError");

        var errors = [];

        if (nameInput.value.trim() === "") {
            errors.push("Name is required.");
        }
        if (emailInput.value.trim() === "") {
            errors.push("Email is required.");
        }
        if (messageInput.value.trim() === "") {
            errors.push("Message is required.");
        }

        if (errors.length > 0) {
            event.preventDefault(); // Stop form from submitting
            errorBox.textContent = errors.join(" ");
            errorBox.style.color = "red";
        } else {
            errorBox.textContent = "Form looks good!";
            errorBox.style.color = "green";
        }
    });
}
