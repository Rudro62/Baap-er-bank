document.getElementById('btn-submit').addEventListener('click', function () {

    // step two get the value of input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    console.log(password);

    if (email === 'rudrohasan62@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Mama eivabe email password vul dile jibone cholba kemne');
    }
})
