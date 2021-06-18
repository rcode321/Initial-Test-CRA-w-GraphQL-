import React from "react";

import { Link } from "react-router-dom";
// style
import "./style.scss";

const LaunchArticle = ({ name, link, imgUrl, description }) => (
	<div className="row">
		<div className="col d-flex justify-content-center">
			<Link
				to={{ pathname: link }}
				className="article "
				target="_blank"
				rel="noopener"
			>
				<img
					srcSet={`${imgUrl}`}
					alt={name}
					className="article__image thumbnail  "
				/>
			</Link>
		</div>
		<div className="col align-items-center d-flex">
			<div className="article__header">
				<h5 className="m-0  ">{name}</h5>
				<p className="m-0 p-2  ">{description}</p>
			</div>
		</div>
	</div>
);

export default LaunchArticle;
