let selected = "0";

const setRating = (e) => {
    e.preventDefault();
    selected = e.target.value;
}

const onSumbit = (e) => {
    e.preventDefault();
    document.getElementById('userRating').innerText = selected;
    document.getElementById('rating').classList.add("hidden");
    document.getElementById('thankyou').classList.remove("hidden");
}

const ratingButtons = document.querySelectorAll('.circle-button')

ratingButtons.forEach(button => {
    button.addEventListener('click', setRating)
})

const submitButton = document.querySelector('.submit-button')
submitButton.addEventListener('click', onSumbit)


