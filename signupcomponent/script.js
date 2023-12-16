const form = document.getElementById("signup-form");
form.addEventListener("submit", validateForm);

function errorIcon(id) {
    const icon = document.createElement("img")
    icon.src = `./images/icon-error.svg`;
    icon.classList.add("error-icon-pos","absolute");
    icon.id = id;
    return icon;
}
function clearIcon(fnContainer,lnContainer,emailContainer,pwContainer) {
    const fnIcon = document.getElementById("fnErrorIcon")
    if (fnContainer.hasChildNodes(fnIcon) && fnIcon) {
        fnContainer.removeChild(fnIcon);
    }
    const lnIcon = document.getElementById("lnErrorIcon")
    if (lnContainer.hasChildNodes(lnIcon) && lnIcon) {
        lnContainer.removeChild(lnIcon);
    }
    const emailIcon = document.getElementById("emailErrorIcon")
    if (emailContainer.hasChildNodes(emailIcon) && emailIcon) {
        emailContainer.removeChild(emailIcon);
    } 
    const pwIcon = document.getElementById("pwErrorIcon")
    if (pwContainer.hasChildNodes(pwIcon) && pwIcon) {
        pwContainer.removeChild(pwIcon);
    }

}

function validateForm(e) {
    e.preventDefault();
    const firstName = document.forms["form"]["fn"];
	const lastName = document.forms["form"]["ln"];
	const email = document.forms["form"]["email"];
	const password = document.forms["form"]["pw"];

    const fnError = document.getElementById("fn-error");
    const fnInput = document.getElementById("fn-input");
    const fnContainer = document.getElementById("fn-input-container");

    const lnError = document.getElementById("ln-error");
    const lnInput = document.getElementById("ln-input");
    const lnContainer = document.getElementById("ln-input-container");

    const emailError = document.getElementById("email-error");
    const emailInput = document.getElementById("email-input");
    const emailContainer = document.getElementById("email-input-container");

    const pwError = document.getElementById("pw-error");
    const pwInput = document.getElementById("pw-input");
    const pwContainer = document.getElementById("pw-input-container");


    const fnErrorIcon = errorIcon("fnErrorIcon");
    const lnErrorIcon = errorIcon("lnErrorIcon");
    const emailErrorIcon = errorIcon("emailErrorIcon");
    const pwErrorIcon = errorIcon("pwErrorIcon");

    clearIcon(fnContainer,lnContainer,emailContainer,pwContainer);

    if (firstName.validity.valueMissing) {
        fnError.textContent = "First Name cannot be empty";
        fnInput.classList.add("br-error");
        fnContainer.appendChild(fnErrorIcon);
    } else {
        fnError.textContent = "";
        fnInput.classList.remove("br-error");
        const fnIcon = document.getElementById("fnErrorIcon")
        if (fnContainer.hasChildNodes(fnIcon) && fnIcon) {
            fnContainer.removeChild(fnIcon);
        }
    }

    if (lastName.validity.valueMissing) {
        lnError.textContent = "Last Name cannot be empty";
        lnInput.classList.add("br-error");
        lnContainer.appendChild(lnErrorIcon);
    } else {
        lnError.textContent = "";
        lnInput.classList.remove("br-error");
        const lnIcon = document.getElementById("lnErrorIcon")
        if (lnContainer.hasChildNodes(lnIcon) && lnIcon) {
            lnContainer.removeChild(lnIcon);
        }
    
    }

    if (email.validity.valueMissing) {
        emailError.textContent = "Email cannot be empty";
        emailInput.classList.add("br-error");
        emailContainer.appendChild(emailErrorIcon);
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Looks like this is not an email";
        emailInput.classList.add("br-error");
        emailContainer.appendChild(emailErrorIcon);
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("br-error");
        const emailIcon = document.getElementById("emailErrorIcon")
        if (emailContainer.hasChildNodes(emailIcon) && emailIcon) {
            emailContainer.removeChild(emailIcon);
        }    
    }

    if (password.validity.valueMissing) {
        pwError.textContent = "Password cannot be empty";
        pwInput.classList.add("br-error");
        pwContainer.appendChild(pwErrorIcon);
    } else {
        pwError.textContent = "";
        pwInput.classList.remove("br-error");
        const pwIcon = document.getElementById("pwErrorIcon")
        if (pwContainer.hasChildNodes(pwIcon) && pwIcon) {
            pwContainer.removeChild(pwIcon);
        }
    }


}

