fetch("challenges.json")
    .then((res) => res.json())
    .then((data) => createChallenges(data))

document.addEventListener("readystatechange", toggleLoading)

function toggleLoading() {
    const loadingBar = document.getElementById("loading-bar")
    const challenges = document.getElementById("challenges")
    if (document.readyState === "complete") {
        challenges.classList.remove("hidden")
        loadingBar.classList.add("hidden")
    }
}

function createChallenges(data) {
    const challengeDiv = document.getElementById("challenges")
    data.forEach((challenge) => {
        const div = document.createElement("div")
        div.className = "card-container relative"
        challengeDiv.appendChild(div)
        div.innerHTML = createCard(challenge)
    });
}

function createCard(challenge) {
    return `
        <img class="br-1" src="${challenge.imageUrl}" alt="${challenge.title} Preview"/>
        <div class="overlay w-full h-full absolute z-1 top-left">
            <div class="card br-1 flex grow-1 col w-full h-full align-center justify-between">
                <h2 class="pt-1">${challenge.title}</h2>
                <div class="flex col rg-1 pb-1">
                    <div class="flex justify-center cg-2">
                        <a href="${challenge.siteUrl}" target="_blank"><i class="fa-solid fa-earth-americas"></i></a>
                        <a href="${challenge.codeUrl}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                    <div class="flex justify-center cg-1">${createIcon(challenge.techUsed)}</div>
                </div>
            </div>
        </div>
    `
}

function createIcon(techs) {
    let icon = ''
    techs.split(",").forEach((tech) => {
        icon += `<span class="tech br-4">${tech}</span>`
    })

    return icon
}