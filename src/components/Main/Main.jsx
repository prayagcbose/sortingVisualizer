import React, { useState, useEffect } from "react";
import "./Main.css";
import BubbleSort from "../../algorithms/BubbleSort";

function Main() {
	const [array, setArray] = useState([]);
	const [changeHeight, setChangeHeight] = useState();
	const [animations, setAnimations] = useState();
	useEffect(() => {
		resetArray();
	}, []);

	const resetArray = () => {
		let array = [];
		let random;
		for (let i = 0; i < 25; i++) {
			random = getRandomInt(5, 80);
			array.push(random);
		}
		setArray(array);
	};

	const bubbleSort = () => {
		const { animations, changeHeight } = BubbleSort([...array]);
		setAnimations(animations);
		setChangeHeight(changeHeight);
		const lines = document.getElementsByClassName("line");
		let colors = "pink";
		for (let i in animations) {
			setTimeout(() => {
				colors = i % 2 === 0 ? "pink" : "blue";
				const [idx1, idx2] = animations[i];
				const lineStyle1 = lines[idx1].style;
				const lineStyle2 = lines[idx2].style;
				lineStyle1.backgroundColor = colors;
				lineStyle2.backgroundColor = colors;
				const change = changeHeight[i];
				if (change) {
					const temp = lineStyle1.height;
					lineStyle1.height = lineStyle2.height;
					lineStyle2.height = temp;
				}
			}, i * 100);
		}
	};

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	return (
		<>
			<div className="outerDiv">
				{array.map((item, idx) => (
					<div key={idx} className="line" style={{ height: `${item}vh` }}></div>
				))}
			</div>
			<button onClick={() => resetArray()}>reset array</button>
			<button onClick={() => bubbleSort()}>Bubble Sort </button>
		</>
	);
}

export default Main;
