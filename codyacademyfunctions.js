// // // // // // // // // // area of the first rectangle
// // // // // // // // // const width = 10;
// // // // // // // // // const height = 6;
// // // // // // // // // // const area = width * height;
// // // // // // // // // // console.log(area);
// // // // // // // // // // // Area of the second rectangle
// // // // // // // // // // const width2 = 4;
// // // // // // // // // // const height2 = 9;
// // // // // // // // // // const area2 = width2 * height2;
// // // // // // // // // // // console.log(area2);
// // // // // // // // // // //Concise Arrow function
// // // // // // // // // // const multiply = (a, b) => a * b;
// // // // // // // // // // // console.log(multiply (2,30)); 
// // // // // // // // // // //Defining the function:
// // // // // // // // // // function sum(num1, num2) {
// // // // // // // // // //     return num1 + num2;
// // // // // // // // // // }

// // // // // // // // // // // //Calling the function:
// // // // // // // // // // // sum(3, 6);

// // // // // // // // // // // function add(num1, num2) {
// // // // // // // // // // //     return num1 + num2;
// // // // // // // // // // // }
// // // // // // // // // // // //Property.length

// // // // // // // // // // // const numbers = [1, 2, 3, 4];

// // // // // // // // // // // numbers.length

// // // // // // // // // // // //Accessing an array element

// // // // // // // // // // // const myArray = [100,200, 300];

// // // // // // // // // // // console.log(myArray[0]);
// // // // // // // // // // // console.log(myArray[1]);
// // // // // // // // // // // console.log(myArray[2]);

// // // // // // // // // // //Adding single element:

// // // // // // // // // // const cart = ['apple', 'orange'];

// // // // // // // // // // cart.push('pear');

// // // // // // // // // // //Adding multiple elements:
// // // // // // // // // // const numbers = [1, 2];

// // // // // // // // // // numbers.push(3, 4, 5);

// // // // // // // // // //concise body functions

// // // // // // // // // // const plantNeedsWater = day => day === 'Wednesday'? true:false;

// // // // // // // // // //Blocks and Scope Code
// // // // // // // // // const city = 'New York City';

// // // // // // // // // const logCitySkyline = () => {
// // // // // // // // //   let skyscraper = 'Empire State Building';
// // // // // // // // //   return 'The stars over the ' + skyscraper + ' in ' + city;
// // // // // // // // // };

// // // // // // // // // console.log(logCitySkyline());

// // // // // // // // //Global Scope 

// // // // // // // // const color = 'blue';

// // // // // // // // const returnSkycolor = () => {
// // // // // // // //     return color; 
// // // // // // // // };
// // // // // // // //The output would be the color blue in this code. 

// // // // // // // const satellite = 'The Moon';
// // // // // // // const galaxy = 'The Milky Way';
// // // // // // // const stars = 'North Star';

// // // // // // // const callMyNightSky = () => {
// // // // // // // 	return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// // // // // // // };

// // // // // // // console.log(callMyNightSky());

// // // // // // //Practice Good Scoping

// // // // // // const logVisibleLightWaves = () => {
// // // // // //     let lightWaves = 'Moonlight';
// // // // // //       let region = 'The Arctic';
// // // // // //     // Add if statement here:
// // // // // //     if (region === 'The Arctic'){
// // // // // //       let lightWaves = 'Northern Lights';
// // // // // //       console.log(lightWaves);
// // // // // //     }
    
// // // // // //     console.log(lightWaves);
// // // // // //   };
  
// // // // // //   logVisibleLightWaves();

// // // // // //Arrays

// // // // // let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

// // // // // console.log(newYearsResolutions);

// // // // //Accessing Elements

// // // // const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

// // // // const listItem = famousSayings[0];

// // // // // console.log(famousSayings[2]);

// // // // // console.log(famousSayings[3]);

// // // // // Arrays with Let and Const

// // // // let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

// // // // const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// // // // // condiments[0] = 'Mayo';

// // // // // console.log(condiments);

// // // // // condiments = ['Mayo'];

// // // // // console.log(condiments);

// // // // // utensils[3] = 'Spoon';

// // // // // console.log(utensils);

// // // // //length property

// // // // // const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

// // // // // console.log(objectives.length);

// // // // //push method

// // // // const chores = ['wash dishes', 'do laundry', 'take out trash'];
// // // // chores.push('sweep floor', 'mop floor');

// // // // console.log(chores);

// // // //pop method

// // // const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

// // // chores.pop();

// // // console.log(chores)

// // //shift method

// // const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// // groceryList.shift();

// // console.log(groceryList);

// // groceryList.unshift('popcorn');

// // console.log(groceryList);

// // console.log(groceryList.slice(1, 4));

// // console.log(groceryList);

// // const pastaIndex = groceryList.indexOf('pasta');

// // console.log(pastaIndex);

// //Arrays and Functions

// const concept = ['arrays', 'can', 'be', 'mutated'];

// function changeArr(arr){
//   arr[3] = 'MUTATED';
// }

// changeArr(concept);

// console.log(concept);

// function removeElemnt (newArr){
//   newArr.pop();
// }

// const concept = ['arrays', 'can', 'be', 'mutated'];

// function changeArr(arr){
//   arr[3] = 'MUTATED';
// }

// changeArr(concept);

// console.log(concept);

// const removeElement = newArr => {
//   newArr.pop()
// }

// removeElement(concept);

// console.log(concept);

// //Nested Arrays

// const numberClusters = [[1, 2], [3, 4], [5, 6]];

// const target = numberClusters[2][1];

