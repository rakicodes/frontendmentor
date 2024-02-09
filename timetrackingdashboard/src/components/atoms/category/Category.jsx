import React from "react";

import "./style.css";

const Category = ({ category, onCategoryClick }) => {
	return (
		<div className="category-container">
			<span
				className={`button md ${category === "daily" ? "white" : ""}`}
				onClick={onCategoryClick}>
				Daily
			</span>
			<span
				className={`button md ${category === "weekly" ? "white" : ""}`}
				onClick={onCategoryClick}>
				Weekly
			</span>
			<span
				className={`button md ${category === "monthly" ? "white" : ""}`}
				onClick={onCategoryClick}>
				Monthly
			</span>
		</div>
	);
};

export default Category;
