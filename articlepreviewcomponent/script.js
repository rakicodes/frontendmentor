const share = document.getElementById("share-icon");
const shareMobile = document.getElementById("share-icon-mobile");
share.addEventListener("click", onShareClick);
shareMobile.addEventListener("click", onShareClick);

function onShareClick() {
    const container = document.getElementById("share-container");
    container.classList.toggle("hidden");
}