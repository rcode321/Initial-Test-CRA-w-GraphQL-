import React, { useEffect } from "react";
import AOS from "aos";
// style
import "./style.scss";

const InfoTable = ({ title, data }) => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="info-table col-12 col-md-8 col-lg-7 d-flex flex-column justify-content-center table-striped ">
			<h5 className="text-white">{title}</h5>
			<div className="text-white display-3 pb-3 ">OVERVIEW</div>

			<table className="table p-4 ">
				<tbody className="table-dark text-white ">
					{data.map((row) => (
						<tr key={row.title}>
							<td>{row.title}</td>
							<td> {row.value}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default InfoTable;
