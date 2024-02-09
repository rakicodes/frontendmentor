import React from "react";
import { useState } from "react";
import Cards from "../../molecules/cards/Cards";
import ProfileCardWithCategory from "../../molecules/profileCardWithCategory/ProfileCardWithCategory";
import profilePicture from "../../../../images/image-jeremy.png"
import "./style.css";

import data from "../../../../data.json";

const Dashboard = () => {
	const [category, setCategory] = useState("daily");

  const onCategoryClick = (e) => {
    setCategory(e.target.innerText.toLowerCase());
  }


	return (
		<div className="dashboard-container">
			<ProfileCardWithCategory
				imgUrl={profilePicture}
				firstName="Jeremy"
				lastName="Robson"
        category={category}
        onCategoryClick={onCategoryClick}
			/>
			<Cards
				data={data}
				category={category}
			/>
		</div>
	);
};

export default Dashboard;
