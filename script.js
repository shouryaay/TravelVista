function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;
    let msg = document.getElementById("msg");

    let emailPattern = /^[a-zA-Z]+@gmail\.com$/;

    if (p.length <= 6) {
        msg.innerText = "Password must be more than 6 characters";
        msg.style.color = "red";
        return;
    }

    if (emailPattern.test(u)) {
        msg.innerText = "Login Success";
        msg.style.color = "green";
    } else {
        msg.innerText = "Invalid Email Format";
        msg.style.color = "red";
    }
}
