
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'alex' && password === 'guiamano') {
        alert('Login successful!');
        window.location.href = "home.html";
        return false;
    } else {
        alert('Invalid username or password. Please try again.');
        return false;
    }
}