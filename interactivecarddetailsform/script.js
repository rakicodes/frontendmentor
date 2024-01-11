const cardNumberInput = document.getElementById("card-number-input");
cardNumberInput.addEventListener("keyup", updateCardNumber);

const cardholderNameInput = document.getElementById("cardholder-name-input");
cardholderNameInput.addEventListener("keyup", updateCardholderName);

const expiryMonthInput = document.getElementById("expiry-month-input");
expiryMonthInput.addEventListener("keyup", updateExpiryMonth);

const expiryYearInput = document.getElementById("expiry-year-input");
expiryYearInput.addEventListener("keyup", updateExpiryYear);

const cvcInput = document.getElementById("cvc-input");
cvcInput.addEventListener("keyup", updateCVC);


const form = document.getElementById("card-form");
form.addEventListener("submit", submitForm);

const cardholderName = document.getElementById("cardholder-name");
const month = document.getElementById("expiry-month");
const year = document.getElementById("expiry-year");

function submitForm(e) {
    e.preventDefault();
    
    const cardholderName = document["card-info"]["name"];
    const cardholderNameInput = document.getElementById("cardholder-name-input")
    const cardholderNameError = document.getElementById("cardholder-name-error")

    const cardNumber = document["card-info"]["card-number"];
    const cardNumberInput = document.getElementById("card-number-input")
    const cardNumberError = document.getElementById("card-number-error")

    const expiryMonth = document["card-info"]["month"];
    const expiryMonthInput = document.getElementById("expiry-month-input")
    const expiryMonthError = document.getElementById("expiry-month-error")

    const expiryYear = document["card-info"]["year"];
    const expiryYearInput = document.getElementById("expiry-year-input")
    const expiryYearError = document.getElementById("expiry-year-error")

    const cvc = document["card-info"]["cvc"];
    const cvcInput = document.getElementById("cvc-input")
    const cvcError = document.getElementById("cvc-error")

    
    /*=============================================
    =            Validation           =
    =============================================*/
    
    
    /*----------  Cardholder name  ----------*/
    if (cardholderName.validity.valueMissing) {
        cardholderNameError.textContent = "Can't be blank"
        cardholderNameInput.classList.add("error-border")
    } else {
        cardholderNameError.textContent = ""
        cardholderNameInput.classList.remove("error-border")
    }

    /*----------  Card number  ----------*/
    if (cardNumber.validity.valueMissing) {
        cardNumberError.textContent = "Can't be blank"
        cardNumberInput.classList.add("error-border")
    } else if (!cardNumber.value.match(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/)) {
        cardNumberError.textContent = "Not the right format"
        cardNumberInput.classList.add("error-border")
    } else {
        cardNumberError.textContent = ""
        cardNumberInput.classList.remove("error-border")

    }
    
    /*----------  Expiry date  ----------*/
    if (expiryMonth.validity.valueMissing) {
        expiryMonthError.textContent = "Can't be blank"
        expiryMonthInput.classList.add("error-border")
    } else if (!((+expiryMonth.value > 0 && +expiryMonth.value <= 12) && (expiryMonth.value.length === 2))) {
        expiryMonthError.textContent = "Not the right format"
        expiryMonthInput.classList.add("error-border")
    } else {
        expiryMonthError.textContent = ""
        expiryMonthInput.classList.remove("error-border")
    }

    if (expiryYear.validity.valueMissing) {
        expiryYearError.textContent = "Can't be blank"
        expiryYearInput.classList.add("error-border")
    } else if (+expiryYear.value <= 0 || expiryYear.value.length !== 2) {
        expiryYearError.textContent = "Not the right format"
        expiryYearInput.classList.add("error-border")
    } else {
        expiryYearError.textContent = ""
        expiryYearInput.classList.remove("error-border")
    }

    /*----------  CVC  ----------*/
    if (cvc.validity.valueMissing) {
        cvcError.textContent = "Can't be blank"
        cvcInput.classList.add("error-border")
    } else if (!cvc.value.match(/^\d{3}$/)) {
        cvcError.textContent = "Not the right format"
        cvcInput.classList.add("error-border")
    } else {
        cvcError.textContent = ""
        cvcInput.classList.remove("error-border")
    }
    
    /*=====  End of Validation  ======*/

    const completed = document.getElementById("completed-state")
    completed.classList.remove("hidden")
    form.classList.add("hidden")
    
}

function updateCardNumber() {
    const cardNumber = document.getElementById("card-number")
    if (cardNumber.innerText==="" || cardNumberInput.value==="") {
        cardNumber.innerText = "0000 0000 0000 0000"
    } else {
        let temp = cardNumberInput.value.split(" ").join("");
        temp = temp.padEnd(16, "0");
        let arr = []
        for (let i=0; i<16; i+=4) {
            arr.push(temp.slice(i,i+4)) 
        }
        cardNumber.innerText = arr.join(" ");
    }
    
}

function updateCardholderName() {
    const cardholderName = document.getElementById("cardholder-name");
    if (cardholderName.innerText==="" || cardholderNameInput.value==="") {
        cardholderName.innerText = "Jane Appleseed"
    } else {
        cardholderName.innerText = cardholderNameInput.value;
    }
}

function updateExpiryMonth() {
    const expiryMonth = document.getElementById("expiry-month");
    if (expiryMonth.innerText==="" || expiryMonthInput.value==="") {
        expiryMonth.innerText = "00"
    } else {
        expiryMonth.innerText = expiryMonthInput.value.padStart(2, "0");
        expiryMonth.innerText = expiryMonthInput.value.slice(0,2);
    }
}

function updateExpiryYear() {
    const expiryYear = document.getElementById("expiry-year");
    if (expiryYear.innerText==="" || expiryYearInput.value==="") {
        expiryYear.innerText = "00"
    } else {
        expiryYear.innerText = expiryYearInput.value.padStart(2, "0");
        expiryYear.innerText = expiryYearInput.value.slice(0,2);
    }
}

function updateCVC() {
    const cvc = document.getElementById("cvc");
    if (cvc.innerText==="" || cvcInput.value==="") {
        cvc.innerText = "000"
    } else {
        cvc.innerText = cvcInput.value.padStart(3, "0");
        cvc.innerText = cvcInput.value.slice(0,3)
    }

}