import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Rocket from "../pages/Rocket/Rocket";
import PastLaunches from "../pages/PastLaunches/PastLaunches";

const Routing = () => (
	<Router>
		<div className="general">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/launches" component={PastLaunches} />
				<Route exact path="/rocket/:id" component={Rocket} />
			</Switch>
		</div>
	</Router>
);

export default Routing;
