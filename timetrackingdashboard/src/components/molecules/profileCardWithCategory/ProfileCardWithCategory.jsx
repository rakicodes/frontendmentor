import React from "react";
import Category from "../../atoms/category/Category";
import ProfileCard from "../../atoms/profileCard/ProfileCard";

import "./style.css";

const ProfileCardWithCategory = ({
	imgUrl,
	firstName,
	lastName,
	category,
	onCategoryClick,
}) => {
	return (
		<div className="profile-card-with-category-container">
			<ProfileCard
				imgUrl={imgUrl}
				firstName={firstName}
				lastName={lastName}
			/>
			<Category
				category={category}
				onCategoryClick={onCategoryClick}
			/>
		</div>
	);
};

export default ProfileCardWithCategory;
