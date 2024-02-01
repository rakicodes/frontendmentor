const dice = document.getElementById('dice');
dice.addEventListener("click", getAdvice)

function setData(data) {
    const adviceId = document.getElementById('advice-id');
    adviceId.innerText = data.slip.id;

    const advice = document.getElementById('advice');
    advice.innerText = `"${data.slip.advice}"`
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setData(data))
}