import React from "react";

import { Link } from "react-router-dom";
// style
import "./style.scss";

const LaunchArticle = ({ name, link, imgUrl, description }) => (
	<div className="launchArticle">
		<div>
			<Link
				to={{ pathname: link }}
				className="article "
				target="_blank"
				rel="noopener"
			>
				<img srcSet={`${imgUrl}`} alt={name} className="article__image " />
			</Link>
		</div>

		<div className="article__header">
			<h5>{name}</h5>
			<p>{description}</p>
		</div>
	</div>
);

export default LaunchArticle;
