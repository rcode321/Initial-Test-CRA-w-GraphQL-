import React, { useEffect } from "react";
import AOS from "aos";

// components
import InfoTable from "../InfoTable/InfoTable";
// hooks
import useTechInfo from "../../hooks/useTechInfo";
// import Galaxy from "./galaxy.jpg";

import "./style.scss";

const TechInfo = ({ name, rocket, engine, isEngine, secondStage }) => {
	const tableContent = useTechInfo({
		name,
		rocket,
		isEngine,
		engine,
		secondStage,
	});

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div
			className="container-fluid  d-flex flex-column tech-info__container "
			data-aos="fade-up"
			data-aos-offset="1"
			data-aos-anchor-placement="top-center"
		>
			<div
				className={`d-flex row
				flex-md-row${isEngine ? "-reverse" : ""}
				justify-content-between flex-column p-5 m-5 `}
			>
				<InfoTable title={tableContent.header} data={tableContent.body} />

				<div className="col col-md-4 d-flex justify-content-center">
					<img src={tableContent.img} alt={name} />
				</div>
			</div>
		</div>
	);
};

export default TechInfo;
