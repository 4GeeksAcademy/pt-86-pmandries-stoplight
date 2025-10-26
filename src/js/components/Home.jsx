import React from "react";
import {useState} from "react";

//create your first component
const Home = () => {
	const [redState, setRedState] = useState("redOff");
	const [yellowState, setYellowState] = useState("yellowOff");
	const [greenState, setGreenState] = useState("greenOn");
	
	const ChangeRed = () => {

		if (redState == "redOff") {
			return (
				setRedState("redOn"),
				setYellowState("yellowOff"),
				setGreenState("greenOff")
				)
		};
	}

	const ChangeYellow = () => {

		if (yellowState == "yellowOff") {
			return (
				setRedState("redOff"),
				setYellowState("yellowOn"),
				setGreenState("greenOff")
				)
		};
	}

	const ChangeGreen = () => {

		if (greenState == "greenOff") {
			return (
				setRedState("redOff"),
				setYellowState("yellowOff"),
				setGreenState("greenOn")
				)
		};
	}

	return (
		<div className="container-fluid display-flex">
			<div className = "" id = "lightBody">
				<div className = {redState}
				onClick = {ChangeRed}
				></div>
				<div className = {yellowState}
				onClick = {ChangeYellow}
				></div>
				<div className = {greenState}
				onClick = {ChangeGreen}
				></div>
			</div>
			<div className = "" id = "lightPost"></div>

			
		</div>
	);
};

export default Home;