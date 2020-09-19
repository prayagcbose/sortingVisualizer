const QuickSortSuper = (array) => {
	let animations = [];
	const QuickSrot = (array, low, hi) => {
		if (low < hi) {
			let pIndex = Partition(array, low, hi);
			QuickSrot(array, low, pIndex);
			QuickSrot(array, pIndex + 1, hi);
			return;
		}
	};

	const Swap = (array, idx1, idx2) => {
		let temp = array[idx1];
		array[idx1] = array[idx2];
		array[idx2] = temp;
	};

	const Partition = (array, low, hi) => {
		let i = low;
		let j = hi - 1;
		let pivot = array[low];
		let flag1 = false;
		let flag2 = false;

		while (i <= j) {
			animations.push([i, j]);
			animations.push([array[i], array[j]]);
			animations.push([i, j]);
			// console.log("in first while =>", [i, j], [array[i], array[j]], [i, j]);
			if (array[i] <= pivot) {
				i++;
			} else {
				flag1 = true;
			}
			if (array[j] > pivot) {
				j--;
			} else {
				flag2 = true;
			}
			if (flag1 && flag2 && i < j) {
				Swap(array, i, j);
				i++;
				j--;
				flag1 = false;
				flag2 = false;
			}
		}
		Swap(array, low, j);
		animations.push([low, j]);
		animations.push([array[low], array[j]]);
		animations.push([low, j]);
		// console.log("in return =>", [low, j], [array[low], array[j]], [low, j]);
		return j;
	};

	// console.log("arr ==>", array);
	QuickSrot(array, 0, array.length);
	// console.log("sorted array ==>", array);
	console.log(animations);

	return { animations };
};

export default QuickSortSuper;
