const faq1 = document.getElementById("faq-1");
faq1.addEventListener('click', toggleAns);
const faq2 = document.getElementById("faq-2");
faq2.addEventListener('click', toggleAns);
const faq3 = document.getElementById("faq-3");
faq3.addEventListener('click', toggleAns);
const faq4 = document.getElementById("faq-4");
faq4.addEventListener('click', toggleAns);
const faq5 = document.getElementById("faq-5");
faq5.addEventListener('click', toggleAns);




function toggleAns(e) {
    const id = e.target.id.split("-").slice(0,2).join("-")
    document.getElementById(id).classList.toggle("darkbold")
    document.getElementById(`${id}-ans`).classList.toggle("hidden")
    document.getElementById(`${id}-icon`).classList.toggle("rotate")
}

