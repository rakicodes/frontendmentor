const form = document.getElementById("email-form");
form.addEventListener("submit", submitEmail);

function submitEmail(e) {
    e.preventDefault();

    const email = document["form"]["email"];
    const error = document.getElementById("error-msg");
    const input = document.getElementById("email-input");

    if (email.validity.typeMismatch || email.validity.valueMissing) {
        error.textContent = "Valid email required";
        input.classList.add("error-input");
    } else {
        error.textContent = "";
        input.classList.remove("error-input");
    }
}