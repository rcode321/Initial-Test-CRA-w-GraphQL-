import React from "react";
// style
import "./style.scss";

const MainHeader = ({ name, description }) => (
	<div className="container">
		<h1 className="header__name">{name}</h1>
		<p className="header__description">{description}</p>
	</div>
);

export default MainHeader;
