let responseDiv = document.querySelector(".responseDiv");

function validateEmail() {

    const inputEmail = document.querySelector("#email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(inputEmail)) {
        isValidEmail();
      } else {
        isnotValidEmail();
    }

}



function isValidEmail() {
    responseDiv.innerHTML = "ok"
}

function isnotValidEmail() {
    responseDiv.innerHTML = "not ok"
}