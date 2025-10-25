import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center text-light container-fluid display-flex">
            <div className = "container mt-5 bg-secondary" id = "trafficTop">Top</div>
			<div className = "container mt-5 bg-black" id = "container">
				<div className = "container rounded-circle bg-danger">Red</div>
				<div className = "container radius-50 bg-warning">Yellow</div>
				<div className = "container radius-50 bg-success">Green</div>
			</div>

			
		</div>
	);
};

export default Home;