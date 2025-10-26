import React from "react";
import {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [redState, setRedState] = useState("redOff");
	const [yellowState, setYellowState] = useState("yellowOff");
	const [greenState, setGreenState] = useState("greenOff");
	
	return (
		<div className="container-fluid display-flex">
			<div className = "" id = "lightBody">
				<div className = {redState}
				onClick = {redState == "redOff" ? () => setRedState("redOn") : () => setRedState("redOff")}
				></div>
				<div className = {yellowState}
				onClick = {yellowState == "yellowOff" ? () => setYellowState("yellowOn") : () => setYellowState("yellowOff")}
				></div>
				<div className = {greenState}
				onClick = {greenState == "greenOff" ? () => setGreenState("greenOn") : () => setGreenState("greenOff")}
				></div>
			</div>
			<div className = "" id = "lightPost"></div>

			
		</div>
	);
};

export default Home;