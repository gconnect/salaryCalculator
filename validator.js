function checkForm(form) {
    if (form.username.value == "seyi" && form.pwd1.value != seyiadekoya) {
        alert(" You entered a valid username and password");
        return true;
    } else {
        alert("please enter a valid username and password")
        return false;
    }

}
