const today = getDay();
const bars = document.getElementsByClassName("bar");

for (let i = 0; i < bars.length; i++) {
	bars[i].addEventListener("mouseover", showSpending);
	bars[i].addEventListener("mouseout", hideSpending);
}

fetch("./data.json")
	.then((res) => res.json())
	.then((json) =>
		localStorage.setItem("weekly-spending", JSON.stringify(json))
	);

function populateGraph(data) {
	const parsedData = JSON.parse(data);
	const maxSpending = Math.max(...parsedData.map((elem) => elem.amount));

	parsedData.forEach((elem) => {
		const bar = document.getElementById(elem.day);

		if (elem.day === today) {
			bar.style = `height: ${(elem.amount / maxSpending) * 100}px; 
                         background-color: hsl(186, 34%, 60%);`;
		} else {
			bar.style = `height: ${(elem.amount / maxSpending) * 100}px;
                         background-color: hsl(10, 79%, 65%);`;
		}
	});
}

function getDay() {
	const today = new Date();
	const day = today.getDay();

	switch (day) {
		case 0:
			return "sun";
		case 1:
			return "mon";
		case 2:
			return "tue";
		case 3:
			return "wed";
		case 4:
			return "thu";
		case 5:
			return "fri";
		case 6:
			return "sat";
		default:
			return "err";
	}
}

function showSpending(e) {
	const parsedData = JSON.parse(localStorage.getItem("weekly-spending"));

	for (let i = 0; i < parsedData.length; i++) {
		if (parsedData[i].day === e.target.id) {
			const elem = document.getElementById(`${e.target.id}-amount`);
			elem.innerText = `$${parsedData[i].amount}`;
			elem.style = `background-color: hsl(25, 47%, 15%);
                          color: hsl(27, 66%, 92%);
                          border-radius: 4px;
                          padding: 4px`;
		}
	}
}

function hideSpending(e) {
	const parsedData = JSON.parse(localStorage.getItem("weekly-spending"));

	for (let i = 0; i < parsedData.length; i++) {
		if (parsedData[i].day === e.target.id) {
			const elem = document.getElementById(`${e.target.id}-amount`);
			elem.innerText = "";
			elem.style = "";
		}
	}
}

populateGraph(localStorage.getItem("weekly-spending"));
