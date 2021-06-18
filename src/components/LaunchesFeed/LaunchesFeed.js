import React from "react";
// components
import LaunchArticle from "../LaunchArticle/LaunchArticle";

import "./style.scss";

const LaunchesFeed = ({ launches }) =>
	launches.map((launch) => (
		<LaunchArticle
			key={launch.id}
			name={launch.mission_name}
			link={launch.links.article_link}
			imgUrl={launch.links.flickr_images[0]}
			description={launch.launch_site.site_name_long}
			className="Feed text-center fs-1"
		/>
	));

export default LaunchesFeed;
