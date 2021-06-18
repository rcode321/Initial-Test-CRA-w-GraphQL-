import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Routing from "./routes/index";
import Footer from "./pages/Footer/Footer";
import "./App.css";

const client = new ApolloClient({
	uri: "https://api.spacex.land/graphql/",
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div>
				<Routing />
				<Footer />
			</div>
		</ApolloProvider>
	);
};

export default App;
