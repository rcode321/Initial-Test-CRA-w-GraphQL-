import React from "react";
import { gql, useQuery } from "@apollo/client";

import TopMenu from "../TopMenu/TopMenu";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

const GET_ROCKETS_NAMES = gql`
	{
		rockets(offset: 1) {
			id
			name
			first_flight
		}
	}
`;

const Navbar = () => {
	const { data, loading, error } = useQuery(GET_ROCKETS_NAMES);

	if (loading) return <Loader />;
	if (error) return <Error error={error} />;

	return (
		<div>
			<div>
				<TopMenu rockets={data.rockets} />
			</div>
		</div>
	);
};

export default Navbar;
