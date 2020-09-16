import React, { useState, useEffect } from "react";
import "./Main.css";
import BubbleSort from "../../algorithms/BubbleSort";
import MergeSortSuper from "./../../algorithms/MergeSort";

const PRIMARY_COLOR = "orange";
const SECONDARY_COLOR = "#429EA6";

function Main() {
	const [array, setArray] = useState([]);
	const [numberOfLines, setNumberOfLines] = useState(25);
	useEffect(() => {
		resetArray();
	}, []);

	const resetArray = () => {
		let array = [];
		let random;
		for (let i = 0; i < numberOfLines; i++) {
			random = getRandomInt(5, 80);
			array.push(random);
		}
		setArray(array);
		const lines = document.getElementsByClassName("line");
		for (let i = 0; i < lines.length; i++) {
			lines[i].style.backgroundColor = PRIMARY_COLOR;
		}
	};

	const bubbleSort = () => {
		const { bubbleSrtAnimations, changeHeight } = BubbleSort([...array]);
		// setbubbleSrtAnimations(bubbleSrtAnimations);
		// setChangeHeight(changeHeight);
		const lines = document.getElementsByClassName("line");
		let colors = "pink";
		for (let i in bubbleSrtAnimations) {
			const id = setTimeout(() => {
				colors = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				const [idx1, idx2] = bubbleSrtAnimations[i];
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
				if (i % 2 !== 0) {
					lineStyle1.backgroundColor = "green";
				}
			}, i * 100);
		}
	};

	//merge sort
	const mergeSort = () => {
		const { animations } = MergeSortSuper([...array]);
		const lines = document.getElementsByClassName("line");
		for (let i in animations) {
			setTimeout(() => {
				let colors = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				if (i % 3 !== 1) {
					const [idx1, idx2] = animations[i];
					const lineStyle1 = lines[idx1].style;
					const lineStyle2 = lines[idx2].style;
					lineStyle1.backgroundColor = colors;
					lineStyle2.backgroundColor = colors;
				} else {
					const [idx1, idx2] = animations[i - 1];
					const [hgt1, hgt2] = animations[i];
					const lineStyle1 = lines[idx1].style;
					const lineStyle2 = lines[idx2].style;
					lineStyle1.height = hgt1 + "vh";
					lineStyle2.height = hgt2 + "vh";
				}
			}, i * 10);
		}
	};

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	const resetNumberOfLines = (e) => {
		setNumberOfLines(e.target.value);
		resetArray();
	};

	return (
		<>
			<div className="outerBtn">
				<button className="button" onClick={() => resetArray()}>
					reset array
				</button>
				<input
					type="range"
					min={25}
					max={250}
					value={numberOfLines}
					onChange={resetNumberOfLines}
				></input>
				<button className="button" onClick={() => bubbleSort()}>
					Bubble Sort
				</button>
				<button className="button" onClick={() => mergeSort()}>
					Merge Sort
				</button>
			</div>
			<div className="outerDiv">
				{array.map((item, idx) => (
					<div
						key={idx}
						className="line"
						style={{
							height: `${item}vh`,
							width: `${8 - numberOfLines / 50}px`,
						}}
					></div>
				))}
			</div>
		</>
	);
}

export default Main;
