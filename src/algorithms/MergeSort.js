const MergeSortSuper = (arrSuper) => {
	let globalArr = [];
	let animations = [];
	const MergeSort = (array) => {
		let len = array.length;
		if (len === 1) {
			globalArr.push(array[0]);
			return array;
		} else {
			let mid = Math.ceil(len / 2);
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

		//animation and globalArr manipulation
		const len3 = arr3.length;
		const lenGlobal = globalArr.length;

		//copy arr3 to global array from back side

		i = len3 - 1;
		j = lenGlobal - 1;
		while (i >= 0) {
			globalArr[j] = arr3[i];
			j--;
			i--;
		}

		//to get the aminations

		j = lenGlobal - 1;
		if (len3 === 2) {
			animations.push([j - 1, j]);
			animations.push([globalArr[j - 1], globalArr[j]]);
			animations.push([j - 1, j]);
		} else {
			const diffInLength = lenGlobal - len3;
			for (i = diffInLength; i < lenGlobal; i++) {
				animations.push([i, i]);
				animations.push([globalArr[i], globalArr[i]]);
				animations.push([i, i]);
			}
		}

		return arr3;
	};
	MergeSort(arrSuper);
	return { animations };
};

export default MergeSortSuper;
