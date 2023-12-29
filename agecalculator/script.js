const form = document.getElementById("birthday-form");
form.addEventListener("submit", submitForm);

function isFormValid() {
	const day = document["form"]["day"];
	const month = document["form"]["month"];
	const year = document["form"]["year"];

	const dayInput = document.getElementById("day-input");
	const monthInput = document.getElementById("month-input");
	const yearInput = document.getElementById("year-input");

	const dayErrMsg = document.getElementById("day-error");
	const monthErrMsg = document.getElementById("month-error");
	const yearErrMsg = document.getElementById("year-error");

	let isValid = true;

	if (day.validity.valueMissing) {
		dayErrMsg.textContent = "This field is required";
		dayInput.classList.add("input-error-border");
		isValid = false;
	} else {
		if (!isDayValid(Number(day.value))) {
			dayErrMsg.textContent = "Must be a valid day";
			dayInput.classList.add("input-error-border");
			isValid = false;
		} else if (
			isMonthValid(month.value) &&
			isYearValid(Number(year.value)) &&
			!isDateValid(Number(month.value), Number(day.value), Number(year.value))
		) {
			dayErrMsg.textContent = "Must be a valid date";
			dayInput.classList.add("input-error-border");
			isValid = false;
		} else {
			dayErrMsg.textContent = "";
			dayInput.classList.remove("input-error-border");
		}
	}

	if (month.validity.valueMissing) {
		monthErrMsg.textContent = "This field is required";
		monthInput.classList.add("input-error-border");
		isValid = false;
	} else {
		if (!isMonthValid(Number(month.value))) {
			monthErrMsg.textContent = "Must be a valid month";
			monthInput.classList.add("input-error-border");
			isValid = false;
		} else {
			monthErrMsg.textContent = "";
			monthInput.classList.remove("input-error-border");
		}
	}

	if (year.validity.valueMissing) {
		yearErrMsg.textContent = "This field is required";
		yearInput.classList.add("input-error-border");
		isValid = false;
	} else {
		const currDate = new Date();
		const birthday = new Date(+year.value, +month.value - 1, +day.value);
		if (!isYearValid(Number(year.value)) || currDate < birthday) {
			yearErrMsg.textContent = "Must be in the past";
			yearInput.classList.add("input-error-border");
			isValid = false;
		} else {
			yearErrMsg.textContent = "";
			yearInput.classList.remove("input-error-border");
		}
	}

	return isValid;
}

function submitForm(e) {
	e.preventDefault();

	const day = Number(document["form"]["day"].value);
	const month = Number(document["form"]["month"].value);
	const year = Number(document["form"]["year"].value);

	if (isFormValid()) {
		const days = document.getElementById("days");
		const months = document.getElementById("months");
		const years = document.getElementById("years");

		const [totalY, totalM, totalD] = calculate(year, month, day);

		days.textContent = totalD;
		months.textContent = totalM;
		years.textContent = totalY;
	}
}

function calculate(year, month, day) {
	const currDate = new Date();
	const currYear = currDate.getFullYear();
	const currMonth = currDate.getMonth() + 1;
	const currDay = currDate.getDate();

	const totalYears =
		currMonth >= month && currDay >= day
			? currYear - year
			: currYear - 1 - year;
	const totalMonths = currMonth > month ? currMonth - month : 0;
	const totalDays = currDay > day ? currDay - day : currDay < day ? day : 0;

	return [totalYears, totalMonths, totalDays];
}

function isDateValid(month, day, year) {
	if (
		month === 1 ||
		month === 3 ||
		month === 5 ||
		month === 7 ||
		month === 8 ||
		month === 10 ||
		month === 12
	) {
		return day >= 1 && day <= 31;
	} else if (month === 4 || month === 6 || month === 9 || month === 11) {
		return day >= 1 && day <= 30;
	} else if (month === 2) {
		return year % 4 === 0 ? day >= 1 && day <= 29 : day >= 1 && day <= 28;
	} else {
		return false;
	}
}

function isDayValid(day) {
	return day >= 1 && day <= 31;
}

function isMonthValid(month) {
	return month >= 1 && month <= 12;
}

function isYearValid(year) {
	return new Date().getFullYear() >= year;
}
