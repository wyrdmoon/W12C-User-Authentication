function login() {
    let emailInput = document.getElementById("email-input").value;
    Cookies.set("userCookie", emailInput.value);
    let passwordInput = document.getElementById("password-input").value;

    let dataObject = {
        email: emailInput,
        password: passwordInput
    }

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("login-status").innerHTML = "LOGIN SUCCESS";
            let tokenObject = JSON.parse(this.responseText);
            Cookies.set("getCookie", tokenObject.token);
            console.log(tokenObject);
            window.open("home.html");
        } else if(this.readyState != 4) {
            document.getElementById("login-status").innerHTML = "LOADING";
        } else {
            document.getElementById("login-status").innerHTML = "ERROR";
        }
    };
    ajax.open("POST", "https://reqres.in/api/login", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(dataObject));
}


document.getElementById("login-submit").addEventListener("click", login);