const errorIcon = document.getElementById("email-error-icon");
const errorMsg = document.getElementById("email-error-msg");
const form = document.getElementById("form");
form.addEventListener("submit", validateEmail);

function validateEmail(e) {
	e.preventDefault();
	const email = document.forms["form"]["email"];

	if (email.validity.typeMismatch || email.validity.valueMissing) {
		errorIcon.classList.remove("hidden");
		errorMsg.classList.remove("hidden");
		email.classList.add("email-error-border");
	}

	if (!email.validity.typeMismatch && !email.validity.valueMissing) {
		errorIcon.classList.add("hidden");
		errorMsg.classList.add("hidden");
		email.classList.remove("email-error-border");
	}
}
