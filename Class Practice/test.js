

// const teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];

// for (let i = 2; i < teams.length; i++) {
// 	console.log(teams[i]);
// }

// teams.forEach(function(el){
// console.log(el)
// });

let myAge = 25;

if(myAge >= 62){
	console.log('you collect social security benefits');
} else if (myAge >= 35){
	console.log('you can run for president 🧙‍♂️');
} else if (myAge >= 25){
	console.log('you can rent a car 🚗');
} else if (myAge >= 21 ){
	console.log('you can drink alcohol 🍻');
} else if (myAge >= 18){
	console.log('you can vote 💫');
} else if (myAge >= 16){
	console.log('you can drive 🚘')
} else if (myAge < 16){
	console.log('you cannot do much outside of going to school 👶')
} else {
	console.log('Please enter a correct age value')
}

const food = 'pear'

switch(food){
	case 'pear':
		console.log('I like pears!')
		//break
	case 'apple':
		console.log('I like apples!')
		break
	default:
		console.log('Nothing :(')
}