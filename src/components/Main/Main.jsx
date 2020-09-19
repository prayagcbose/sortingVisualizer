import React, { useState, useEffect } from "react";
import "./Main.css";
import BubbleSort from "../../algorithms/BubbleSort";
import MergeSortSuper from "./../../algorithms/MergeSort";
import QuickSortSuper from "./../../algorithms/QuickSort";
import SelectionSort from "./../../algorithms/SelectionSort";

const PRIMARY_COLOR = "white";
const SECONDARY_COLOR = "red";

function Main() {
	const [array, setArray] = useState([]);
	const [numberOfLines, setNumberOfLines] = useState(25);
	const [timeDelayOfAnimation, setTimeDelayOfAnimation] = useState(100);
	const [running, setRunning] = useState(false);
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
		setRunning(true);
		const { bubbleSrtAnimations, changeHeight } = BubbleSort([...array]);

		const lines = document.getElementsByClassName("line");

		for (let i in bubbleSrtAnimations) {
			setTimeout(() => {
				let colors = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
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
				if (i === bubbleSrtAnimations.length - 1) {
					setRunning(false);
					lines[0].style.backgroundColor = "green";
				}
			}, i * timeDelayOfAnimation);
		}
	};

	//selection sort

	const selectionSort = () => {
		const { animations } = SelectionSort([...array]);
		const lines = document.getElementsByClassName("line");
		for (let i in animations) {
			setTimeout(() => {
				if (animations[i].length === 1) {
					const [idx] = animations[i];
					const lineStyle = lines[idx].style;
					lineStyle.backgroundColor =
						lineStyle.backgroundColor == "red" ? PRIMARY_COLOR : "red";
				} else {
					if (animations[i].length === 3) {
						const [idx] = animations[i];
						const lineStyle = lines[idx].style;
						lineStyle.backgroundColor =
							lineStyle.backgroundColor == "yellow" ? PRIMARY_COLOR : "yellow";
					} else {
						const [idx1, idx2, hgt1, hgt2] = animations[i];
						const lineStyle1 = lines[idx1].style;
						const lineStyle2 = lines[idx2].style;
						lineStyle1.height = `${hgt1}vh`;
						lineStyle2.height = `${hgt2}vh`;
					}
				}
			}, i * timeDelayOfAnimation * 2);
		}
	};

	//merge sort
	const mergeSort = () => {
		setRunning(true);
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
				if (i === animations.length - 1) {
					setRunning(false);
				}
			}, i * timeDelayOfAnimation);
		}
	};

	const quickSort = () => {
		setRunning(true);
		const { animations } = QuickSortSuper([...array]);

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
				if (i === animations.length - 1) {
					setRunning(false);
				}
			}, i * timeDelayOfAnimation);
		}
	};

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	const resetNumberOfLines = (e) => {
		setNumberOfLines(e.target.value);
		setTimeDelayOfAnimation(100 - numberOfLines);
		resetArray();
	};

	return (
		<div className="container-fluid">
			<div className="outerBtn">
				<button
					className="btn button"
					disabled={running}
					onClick={() => resetArray()}
				>
					reset array
				</button>
				<input
					type="range"
					className="custom-range range"
					min={25}
					max={80}
					value={numberOfLines}
					disabled={running}
					onChange={resetNumberOfLines}
				></input>
				<button
					className="btn button"
					disabled={running}
					onClick={() => bubbleSort()}
				>
					Bubble Sort
				</button>
				<button
					className="btn button"
					disabled={running}
					onClick={() => mergeSort()}
				>
					Merge Sort
				</button>
				<button
					className="btn button"
					disabled={running}
					onClick={() => quickSort()}
				>
					Quick Sort
				</button>
				<button
					className="btn button"
					disabled={running}
					onClick={() => selectionSort()}
				>
					Selection Sort
				</button>
			</div>

			<div className="outerDiv">
				{array.map((item, idx) => (
					<div
						key={idx}
						className="line"
						style={{
							height: `${item}vh`,
							width: `${8 - numberOfLines / 100}px`,
						}}
					></div>
				))}
			</div>
		</div>
	);
}

export default Main;
