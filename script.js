function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;
    let msg = document.getElementById("msg");
    if (p.length < 6) {
        msg.innerText = "Password must be at least 6 characters";
        msg.style.color = "red";
        return;
    }
    if (u === "shourya@gmail.com" && p === "123456") {
        msg.innerText = "Login Success";
        msg.style.color = "green";
    } else {
        msg.innerText = "Wrong Credentials";
        msg.style.color = "red";
    }
}
