const MergeSort = (array) => {
	let len = array.length;
	if (len === 1) {
		return array;
	} else {
		let mid = Math.floor(len / 2);
		let arr1 = MergeSort(array.slice(0, mid));
		let arr2 = MergeSort(array.slice(mid, len));
		return Merge(arr1, arr2);
	}
};

const Merge = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	const len1 = arr1.length;
	const len2 = arr2.length;
	let arr3 = [];
	while (i < len1 && j < len2) {
		if (arr1[i] < arr2[j]) {
			arr3.push(arr1[i]);
			i++;
		} else {
			arr3.push(arr2[j]);
			j++;
		}
	}
	while (i < len1) {
		arr3.push(arr1[i]);
		i++;
	}

	while (j < len2) {
		arr3.push(arr2[j]);
		j++;
	}

	return arr3;
};

console.log(MergeSort([8, 9, 7, 6, 0, 4, 6, 3]));
