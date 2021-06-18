const useTechInfo = ({ name, rocket, engine, isEngine, secondStage }) => {
	const header = name.toUpperCase();

	const firstRow = {
		title: isEngine ? "NUMBER" : "HEIGHT",
		value: isEngine
			? engine.number
			: rocket.height.meters + " m/ " + rocket.height.feet + " /ft",
	};
	const secondRow = {
		title: isEngine ? "PROPELLANT1" : "DIAMETER",
		value: isEngine
			? engine.propellant_1
			: rocket.diameter.meters + " m/ " + rocket.diameter.feet + " /ft",
	};
	const thirdRow = {
		title: isEngine ? "PROPELLANT2" : "STAGES",
		value: isEngine ? engine.propellant_2 : rocket.stages,
	};
	const fourthRow = {
		title: isEngine ? "THRUST TO WEIGHT" : "COST PER LAUNCH",
		value: isEngine ? engine.thrust_to_weight : rocket.cost,
	};

	const fifthRow = {
		title: isEngine ? "ENGINES" : "COMPANY",
		value: isEngine ? secondStage.engines : rocket.company,
	};
	const sixthRow = {
		title: isEngine ? "FUEL AMOUNT TONS" : "FIRST FLIGHT",
		value: isEngine ? secondStage.fuel_amount_tons : rocket.cost,
	};

	// const body = [firstRow];
	const body = [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow];

	const img = `../assets/images/${name.replace(/\s+/g, "")}.png`;

	return {
		header,
		body,
		img,
	};
};

export default useTechInfo;

// const useTechInfo = ({ name, rocket, roadsters, isEngine }) => {
// 	const header = name.toUpperCase();

// 	const firstRow = {
// 		title: isEngine ? "EARTH DISTANCE KM" : "HEIGHT",
// 		value: isEngine
// 			? roadsters.earth_distance_km
// 			: rocket.height.meters + " m/ " + rocket.height.feet + " /ft",
// 	};
// 	const secondRow = {
// 		title: isEngine ? "EARTH DISTANCE MI" : "DIAMETER",
// 		value: isEngine
// 			? roadsters.earth_distance_mi
// 			: rocket.diameter.meters + " m/ " + rocket.diameter.feet + " /ft",
// 	};
// 	const thirdRow = {
// 		title: isEngine ? "MARS DISTANCE KM" : "STAGES",
// 		value: isEngine ? roadsters.mars_distance_km : rocket.stages,
// 	};
// 	const fourthRow = {
// 		title: isEngine ? "MARS DISTANCE MI" : "COST PER LAUNCH",
// 		value: isEngine ? roadsters.mars_distance_mi : rocket.cost,
// 	};

// 	const body = [firstRow, secondRow, thirdRow, fourthRow];

// 	const img = `../assets/${name.replace(/\s+/g, "")}.png`;

// 	return {
// 		header,
// 		body,
// 		img,
// 	};
// };

// export default useTechInfo;
