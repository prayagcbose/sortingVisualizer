const SelectionSort = (array) => {
	let animations = [];
	let len = array.length;
	let smallIndex = 0;
	let small = Number.MAX_SAFE_INTEGER;
	let j;
	for (let i = 0; i < len - 1; i++) {
		animations.push([i, i, i]);
		for (j = i; j < len; j++) {
			if (i !== j) {
				animations.push([j], [j]);
			}
			if (array[j] < small) {
				small = array[j];
				smallIndex = j;
			}
		}
		Swap(array, smallIndex, i);
		small = Number.MAX_SAFE_INTEGER;
		animations.push([i, smallIndex, array[i], array[smallIndex]]);
		animations.push([i, i, i]);
	}
	return { animations };
};

const Swap = (array, idx1, idx2) => {
	let temp = array[idx1];
	array[idx1] = array[idx2];
	array[idx2] = temp;
};

export default SelectionSort;
