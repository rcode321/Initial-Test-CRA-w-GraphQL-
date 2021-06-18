import React from "react";
import { gql, useQuery } from "@apollo/client";
import ReactPlayer from "react-player";
// import heroVideo from "./heroVideo.mp4";
import heroVideo from "./SpaceShip.mp4";
// Components
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import MainHeader from "../../components/MainHeader/MainHeader";

import "./style.scss";

const GET_COMPANY_INFO = gql`
	{
		company {
			name
			summary
		}
	}
`;

const Home = () => {
	const { data, loading, error } = useQuery(GET_COMPANY_INFO);

	if (loading) return <Loader />;
	if (error) return <Error error={error} />;

	return (
		<div className="videoPlayer">
			<ReactPlayer
				className="reactVideoPlayer"
				url={heroVideo}
				playing
				loop
				muted
				width="100%"
				height="100%"
			/>
			<div className="home__container d-flex align-items-center text-center">
				<MainHeader name={data.company.name} description={data.company.summary} />
			</div>
			<div className="overlay" />
		</div>
	);
};

export default Home;
