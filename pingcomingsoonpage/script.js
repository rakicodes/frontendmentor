const form = document.getElementById("email-form")
form.addEventListener("submit", validateEmail)

function validateEmail(e) {
    e.preventDefault();

    const email = document["form"]["email"];
    const emailInput = document.getElementById("email-input");
    const emailError = document.getElementById("email-error")

    if (email.validity.valueMissing || email.validity.typeMismatch) {
        emailError.textContent = "Please provide a valid email address"
        emailError.classList.add("pt-0")
        emailInput.classList.add("border-error")
    } else {
        emailError.textContent = ""
        emailError.classList.remove("pt-0")
        emailInput.classList.remove("border-error")

    }
}