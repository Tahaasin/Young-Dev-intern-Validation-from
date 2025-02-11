document.getElementById("Signup-form").addEventListener("submit", function(event){
    event.preventDefault();
    clearErrors();

    const name =document.getElementById("name").value.trim();
    const Email =document.getElementById("Email").value.trim();
    const Password =document.getElementById("Password").value.trim();

    let isValid = true;

    if (name==="") {
        showError("name-error", "Name is required.");
        isValid = false;
        
    }

    if (Email==="") {
        showError("Email-error", "Email is required.");
        isValid = false;
        
    }else if(!validateEmail(Email)) {
        showError("email-error", "Please enter a valid Email address.");
        isValid = false;
    }
    if (password === "") {
        showError("password-error", "Password is required.");
        isValid = false;
    } else if (password.length < 7) {
        showError("password-error", "Password must be at least 7 characters long.");
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
        this.reset(); // Clear the form
    }
});

function showError(id, message) {
    document.getElementById(id).textContent = message;
}


function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => (error.textContent = ""));
}


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}