import React from "react";
import CardAccent from "../../atoms/cardAccent/CardAccent";
import Card from "../../atoms/card/Card";
import formatCategoryForPreviousDay from "../../../../utility/formatCategoryForPreviousDay";
import "./style.css"

const CardWithTopAccent = ({ item, category, image, color }) => {
	return (
		<div className="card-with-top-accent-container">
			<CardAccent 
                image={image}
                color={color}
            />
			<Card
				title={item.title}
				category={formatCategoryForPreviousDay(category)}
				currHrs={item.timeframes[category].current}
				prevHrs={item.timeframes[category].previous}
			/>
		</div>
	);
};

export default CardWithTopAccent;
