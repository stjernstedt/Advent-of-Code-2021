const reader = require('fs');

let horizontal = 0;
let depth = 0;
let aim = 0;

// Part 1
// reader.readFile('input.txt', 'utf8', (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}

// 	let result = data.split('\n').map(line => line.trim());
// 	result.forEach(function (line) {
// 		line = line.split(' ');
// 		switch (line[0]) {
// 			case 'forward':
// 				horizontal += parseInt(line[1]);
// 				break;
// 			case 'up':
// 				depth -= parseInt(line[1]);
// 				break;
// 			case 'down':
// 				depth += parseInt(line[1]);
// 				break;
// 		}
// 	});

// 	let position = horizontal * depth;
// 	console.log(position);
// })

// Part 2
reader.readFile('input.txt', 'utf8', (err, data) => {
	if (err) {
		console.log(err);
		return;
	}

	let result = data.split('\n').map(line => line.trim());
	result.forEach(function (line) {
		line = line.split(' ');
		switch (line[0]) {
			case 'forward':
				horizontal += parseInt(line[1]);
				depth += parseInt(line[1] * aim);
				break;
			case 'up':
				aim -= parseInt(line[1]);
				break;
			case 'down':
				aim += parseInt(line[1]);
				break;
		}
	});

	let position = horizontal * depth;
	console.log(position);
})
