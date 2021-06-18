import React, { Fragment } from "react";
// components
import RocketHeader from "../RocketHeader/RocketHeader";
import TechInfo from "../TechInfo/TechInfo";
// import Galaxy from "./galaxy.jpg";

const Rocket = ({ rocket }) => {
	// const {
	// 	first_flight,
	// 	id,
	// 	name,
	// 	height,
	// 	diameter,
	// 	stages,
	// 	cost_per_launch,
	// 	roadster,
	// } = rocket;

	const {
		id,
		name,
		height,
		diameter,
		stages,
		cost_per_launch,
		first_flight,
		engines,
		company,
		second_stage,
		// roadster,
	} = rocket;

	return (
		<Fragment>
			{/* <img src={Galaxy} alt="Galaxy" /> */}
			<div className="rocket d-flex flex-column align-items-center justify-content-around">
				<RocketHeader
					id={id}
					name={name}
					first_flight={first_flight}
					company={company}
				/>
				<TechInfo
					name={name}
					rocket={{
						height,
						diameter,
						stages,
						company,
						cost: cost_per_launch,
					}}
				/>
			</div>
			<TechInfo
				name={engines.type}
				engine={engines}
				secondStage={second_stage}
				isEngine
			/>
		</Fragment>
	);
};

export default Rocket;
