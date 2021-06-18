import React from "react";
import { gql, useQuery } from "@apollo/client";
// components
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Rocket from "../../components/Rocket/Rocket";

const GET_ROCKET_INFO = gql`
	query GET_ROCKET_INFO($rocketId: ID!) {
		# rocket(id: $rocketId) {
		# 	name
		# 	height {
		# 		feet
		# 		meters
		# 	}
		# 	diameter {
		# 		feet
		# 		meters
		# 	}
		# 	stages
		# 	cost_per_launch
		# 	first_flight
		# 	roadster {
		# 		name
		# 		details
		# 		mars_distance_km
		# 		mars_distance_mi
		# 		period_days
		# 	}
		# }

		# rocket(id: $rocketId) {
		# 	name
		# 	height {
		# 		feet
		# 		meters
		# 	}
		# 	diameter {
		# 		feet
		# 		meters
		# 	}
		# 	stages
		# 	cost_per_launch
		# 	first_flight
		# 	engines {
		# 		type
		# 		number
		# 		propellant_1
		# 		propellant_2
		# 		thrust_to_weight
		# 	}
		# }

		rocket(id: $rocketId) {
			name
			height {
				feet
				meters
			}
			diameter {
				feet
				meters
			}
			stages
			cost_per_launch
			first_flight
			engines {
				type
				propellant_1
				propellant_2
				thrust_to_weight
				number
			}
			company
			second_stage {
				burn_time_sec
				engines
				fuel_amount_tons
			}
		}
	}
`;

const RocketPage = ({ match }) => {
	const rocketId = match.params.id;

	const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
		variables: { rocketId },
	});

	if (loading) return <Loader />;
	if (error) return <Error error={error} />;
	console.log(data.rocket.name);
	return <Rocket rocket={{ ...data.rocket, id: rocketId }} />;
};

export default RocketPage;
