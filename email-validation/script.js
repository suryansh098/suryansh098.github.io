function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) 
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is valid!";
        text.style.color = "#00ff00";
    }
    else if (email == "")
    {
        text.innerHTML = "";
        form.classList.remove("valid");
        form.classList.remove("invalid");
    }
    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please enter a valid email address!";
        text.style.color = "#ff0000";
    }
}