const BubbleSort = (arr1) => {
	let temp;
	let arr = arr1;
	let bubbleSrtAnimations = [];
	let changeHeight = [];
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 1; j < i + 1; j++) {
			bubbleSrtAnimations.push([j, j - 1]);
			bubbleSrtAnimations.push([j, j - 1]);
			if (arr[j] < arr[j - 1]) {
				changeHeight.push(true, false);

				temp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = temp;
			} else {
				changeHeight.push(false, false);
			}
		}
	}

	return { bubbleSrtAnimations, changeHeight };
};

export default BubbleSort;
