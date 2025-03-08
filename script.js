function togglePassword(fieldId) {
    let field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}

document.getElementById("signupForm").onsubmit = function () {
    let email = document.getElementsByName("email")[0].value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("signup-confirm-password").value;

    if (!email.endsWith("@gmail.com")) {
        alert("Email must be a @gmail.com address!");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
};

document.getElementById("loginForm").onsubmit = function () {
    let loginPassword = document.getElementById("login-password").value;
    let resetPassword = localStorage.getItem("resetPassword");

    if (loginPassword.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    if (resetPassword && loginPassword !== resetPassword) {
        alert("Incorrect password! If you reset your password, please use the new one.");
        return false;
    }
};

document.getElementById("forgotPasswordForm").onsubmit = function () {
    let newPassword = document.getElementById("pass").value;
    let confirmNewPassword = document.getElementById("con-pass").value;

    if (newPassword.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match!");
        return false;
    }

    localStorage.setItem("resetPassword", newPassword);
    alert("Your password has been reset. Please use your new password to log in.");
    return true;
};