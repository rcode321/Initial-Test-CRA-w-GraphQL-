import React from "react";
// style
import "./style.scss";

const RocketHeader = ({ id, name, first_flight, company }) => {
	const imgStyle = {
		backgroundImage: "url(../assets/images/" + id + ".jpg)",
		backgroundPosition: "center center",
		backgroundSize: "cover",
		height: "100vh",
		width: "100%",
	};

	return (
		<div className="d-flex flex-column justify-content-around w-100">
			<div className="imageStyle" style={imgStyle}>
				<div className="rocket__header__container position-relative d-flex flex-column align-items-center">
					<h1 className="rocket__header__text">{name.toUpperCase()}</h1>
					<p className="fs-4">{`First Flight ${first_flight}`}</p>
					<strong>
						<p className="fs-2 p-3 ">{`Company Name ${company}`}</p>
					</strong>
				</div>
			</div>
		</div>
	);
};

export default RocketHeader;
