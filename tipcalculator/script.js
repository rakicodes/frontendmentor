const billInput = document.getElementById("bill-input")
billInput.addEventListener("change", handleBillChange)

const numInput = document.getElementById("numOfPeople")
numInput.addEventListener("change", handleNumChange)

const tipsInput = document.querySelectorAll(".tip")
tipsInput.forEach(tip => { tip.addEventListener("click", handleTipClick) })

const customInput = document.getElementById("custom")
customInput.addEventListener("change", handleCustomChange)

const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

const reset = document.getElementById("reset")
reset.addEventListener("click", handleReset)

let billValue; 
let numValue;
let tipValue;

function handleBillChange(e) {
    billValue = e.target.value;
    calculateTip(billValue, tipValue, numValue);
    calculateTotal(billValue, tipValue, numValue);
}

function handleNumChange(e) {
    const errMsg = document.getElementById("numOfPeople-err")

    if (e.target.value === '0') {
        errMsg.innerText = "Can't be zero"
        errMsg.style = "color: hsl(15, 70%, 55%);"
        numInput.style = "border: 2px solid hsl(15, 70%, 55%);"
    } else {
        errMsg.innerText = ""
        numInput.style = "border: none;"
        numValue = e.target.value;
        calculateTip(billValue, tipValue, numValue);
        calculateTotal(billValue, tipValue, numValue);    
    }
}

function handleTipClick(e) {
    if (e.target.id === "custom") return;
    tipValue = e.target.value
    calculateTip(billValue, tipValue, numValue);
    calculateTotal(billValue, tipValue, numValue);
}

function handleCustomChange(e) {
    tipValue = e.target.value;
    calculateTip(billValue, tipValue, numValue);
    calculateTotal(billValue, tipValue, numValue);
}

function calculateTip(bill, tip, numOfPeople) {
    if (!bill || !tip || !numOfPeople) return;

    if (tip.includes("%")) {
        let percent = +(tip.split("%")[0]) / 100;
        tipAmount.innerText = Math.round((bill*percent) / numOfPeople);
    } else {
        tipAmount.innerText = (+tip) / numOfPeople;
    }

}

function calculateTotal(bill, tip, numOfPeople) {
    if (!bill || !tip || !numOfPeople) return;

    if (tip.includes("%")) {
        let percent = +(tip.split("%")[0]) / 100;
        totalAmount.innerText = ((Math.round((bill*percent))+ +bill) / numOfPeople);
    } else {
        totalAmount.innerText = (+bill+ +tip)/ +numOfPeople;
    }

}

function handleReset() {
    tipAmount.innerText = "0.00"
    totalAmount.innerText = "0.00"
    customInput.value = "";
    billInput.value = "";
    numInput.value = "";
}