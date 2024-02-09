import React from "react";

import CardWithTopAccent from "../cardWithTopAccent/CardWithTopAccent";

import exerciseIcon from "../../../../images/icon-exercise.svg";
import playIcon from "../../../../images/icon-play.svg";
import selfCareIcon from "../../../../images/icon-self-care.svg";
import socialIcon from "../../../../images/icon-social.svg";
import studyIcon from "../../../../images/icon-study.svg";
import workIcon from "../../../../images/icon-work.svg";

import "./style.css"

const accentStyles = {
	"Work": {
		icon: workIcon,
		color: "hsl(15, 100%, 70%)"
	},
	"Play": {
		icon: playIcon,
		color: "hsl(195, 74%, 62%)"
	},
	"Study": {
		icon: studyIcon,
		color: "hsl(348, 100%, 68%)"
	},
	"Exercise": {
		icon: exerciseIcon,
		color: "hsl(145, 58%, 55%)"
	},
	"Social": {
		icon: socialIcon,
		color: "hsl(264, 64%, 52%)"
	},
	"Self Care": {
		icon: selfCareIcon,
		color: "hsl(43, 84%, 65%)"
	}
}

const Cards = ({ data, category }) => {

	return (
		<div className="cards-container pt-1">
			{data.map((item, i) => (
				<CardWithTopAccent
					color={accentStyles[item.title].color}
					image={accentStyles[item.title].icon}
					key={i}
					item={item}
					category={category}
				/>
			))}
		</div>
	);
};

export default Cards;
