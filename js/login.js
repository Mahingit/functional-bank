document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get password
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;

    //check email and password
    if (userEmail == 'my@email.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
        // window.location.href = 'banking.html';
    }
    else {
        alert('wrong id password');
    }
})
