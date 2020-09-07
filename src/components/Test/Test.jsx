import React, { useState, useEffect } from "react";
import "./Test.css";

function Test() {
	const [array, setArray] = useState([]);
	const [animations, setAnimations] = useState([
		[0, 1],
		[0, 1],
		[1, 2],
		[1, 2],
		[2, 3],
		[2, 3],
		[3, 4],
		[3, 4],
		[0, 1],
		[0, 1],
		[1, 2],
		[1, 2],
	]);
	const [changeHeight, setChangeHeight] = useState([
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
		true,
		false,
	]);

	useEffect(() => {
		resetArray();
	}, []);

	const resetArray = () => {
		let array = [];
		for (let i = 10; i > 1; i--) {
			array.push(i);
		}
		setArray(array);
	};

	const changeColor = () => {
		const line = document.getElementsByClassName("line");
		for (let i = 0; i < 100; i++) {
			setTimeout(() => {
				const lineStyle = line[i % 10].style;
				lineStyle.backgroundColor =
					lineStyle.backgroundColor === "red" ? "green" : "red";
			}, i * 100);
		}
	};

	const animation = () => {
		const line = document.getElementsByClassName("line");
		for (let i in animations) {
			const [oneIdx, twoIdx] = animations[i];
			const lineStyleOne = line[oneIdx].style;
			const lineStyleTwo = line[twoIdx].style;
			setTimeout(() => {
				lineStyleOne.backgroundColor = "red";
				lineStyleTwo.backgroundColor = "red";
			}, i * 1000);
			setTimeout(() => {
				lineStyleOne.backgroundColor = "green";
				lineStyleTwo.backgroundColor = "green";
			}, i * 1000);
		}
	};

	const testInterval = () => {
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
			}, i * 1000);
		}
	};

	return (
		<div className="outerDiv">
			{array.map((item, idx) => (
				<div key={idx} className="line" style={{ height: `${item}rem` }}></div>
			))}
			<button onClick={() => changeColor()}>change color</button>
			<button onClick={() => resetArray()}>reset array</button>
			<button onClick={() => testInterval()}>testInterval</button>
			<button onClick={() => animation()}>animate</button>
		</div>
	);
}

export default Test;
