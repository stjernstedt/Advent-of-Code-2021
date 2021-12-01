const reader = require('fs');

let count = 0;

// Part 1
// reader.readFile('input.txt', 'utf8', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}

// 	result = data.split('\n');
// 	let previous = 0;
// 	for (i in result) {
// 		if (result[i] > previous) count++;
// 		previous = result[i];
// 	}
// 	console.log(count);
// })

// Part 2
reader.readFile('input.txt', 'utf8', (err, data) => {
	if (err) {
		console.log(err);
		return;
	}

	let result = data.split('\n').map(number => parseInt(number.trim()));
	let sum = 0;
	let previous = undefined;
	for (i in result) {
		i = parseInt(i);
		if (result[i + 2] != undefined) {
			sum = result[i] + result[i + 1] + result[i + 2];
			if (sum > previous) count++;
			previous = sum;
		}
	}
	console.log(count);
})
