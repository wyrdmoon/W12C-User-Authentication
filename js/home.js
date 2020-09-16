var userName = Cookies.get("username");
let token = Cookies.get("getCookie");
if (token == undefined) {

    document.getElementById("colors").innerHTML = "ERROR";
}
else {
    var userName = Cookies.get("username");
    document.getElementById("welcome-user").innerHTML = "Welcome User" + userName;




    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let colors = JSON.parse(this.responseText);
           
            for (let counter = 0; counter < colors.data.length; counter++) {
            
                console.log(colors.data[0])
                document.getElementById("colors").innerHTML += "<h2>" + colors.data[counter].name + "</h2>"
               
            
                let div = document.createElement("div");
                div.style.width = "300px";
                div.style.height = "300px";
                div.style.background = colors.data[counter].color;
                document.getElementById("colors").append(div);

            }
            


        } else if (this.readyState != 4) {
            document.getElementById("login-status").innerHTML = "LOADING";
            document.getElementById("login-status").style.color = "blue";
        }
        else {
            document.getElementById("login-status").innerHTML = "ERROR";
            console.log(this.status)
            document.getElementById("login-status").style.color = "red";
        };

    };
    ajax.open("GET", "https://reqres.in/api/unknown", true);
    ajax.send();



}
