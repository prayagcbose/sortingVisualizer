import React, { useState, useEffect } from "react";
import Draw from "../Draw/Draw";

const BubbleSrt = ({ array = [] }) => {
	const [comp, setComp] = useState([0, 0]);
	let arr = array;
	let temp;
	let i = arr.length - 1;
	let j = 1;
	console.log("i'm running");
	useEffect(() => {
		for (; i > 0; i--) {
			console.log(i);
			for (; j < i + 1; j++) {
				if (arr[j] < arr[j - 1]) {
					temp = arr[j - 1];
					arr[j - 1] = arr[j];
					arr[j] = temp;
				}
				setComp([j - 1, j]);
			}
		}
	}, []);

	return <Draw array={arr} comp1={comp[0]} comp2={comp[1]}></Draw>;
};

export default BubbleSrt;
