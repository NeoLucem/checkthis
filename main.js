function grab() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var remember = document.getElementById('chkRemember').checked;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', remember);
}