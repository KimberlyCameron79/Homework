//////////////////////////////
// Easy Going
/////////////////////////////


////////////////////////////
// Get Even
////////////////////////////


////////////////////////////
// Fizz Buzz
////////////////////////////


/////////////////////////////
// Wild Wild Life
////////////////////////////


////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////


/////////////////////////////
// Methods, Revisited
////////////////////////////


////////////////////////////
// Where is Waldo
///////////////////////////


////////////////////////////
// Excited Kitten
///////////////////////////


///////////////////////////
// Find the Median
///////////////////////////

console.log('Im this file')




    for(let j =0; j < 20; j++){
        console.log('Easy Going answered');
    
}

//GET EVEN

for(let i =0; i < 200; i++){
    if (i % 2 === 0)
    console.log(i)
}
    console.log('Get even answered')

//FIZZ BUZZ

for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
    console.log(`I found a ${[i]}. Fizz Buzz.`)
} else if (i % 5 === 0 ){
    console.log(`I found a ${[i]}. Buzz`);
} else if(i % 3 === 0){
    console.log(`I found a ${[i]}. Fizz.`);
}
    console.log('Fizz Buzz answered');
}

//WILD WILD LIFE

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

wolfy[2]= 17;
wolfy[3]= "Gotham City";
porgee.push="Hawkins";
wolfy.shift();
wolfy.unshift("Gameboy");



console.log(wolfy);
console.log(porgee);
console.log("Wild Wild Life answered");


//YELL AT THE NINIJA TURTLES

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];


for (const element of ninjaTurtles) {
  console.log(ninjaTurtles);
}
        

console.log("Yell at the Ninja Turtles answered");

//METHODS, REVISITED

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

console.log(favMovies[8])   

favMovies.sort();              //sorts data in ascending order.
console.log(favMovies)

favMovies.pop();             // removes last element in the array, use another console.log to complete method. 
console.log(favMovies)

favMovies.push("Guardians of the Galaxy");     //pushes new element at the end of the array. 
console.log(favMovies)

favMovies.reverse();       //Reverses the elements in the array.
console.log(favMovies)

favMovies.shift();          //Removes the first element of the array. ("Guardians of the Galaxy")
console.log(favMovies) 

favMovies.unshift();        //Adds one or more elements at the beginning of the array. It didn't return anything because I didn't command it to return a particular string.
console.log(favMovies)

favMovies.splice (14, 1, "Avatar");        //Adds elements at the point of the array you direct it to, removes what string or number in the array you direct it to or overwrites array elements. It did remove DJango from the array.
console.log(favMovies)

favMovies.slice (10,15);                  //Removes the last half of the array. Copies a given part of an array and returns that copied part as  new array.
console.log(favMovies)

console.log(favMovies[13])

favMovies.indexOf("f");
console.log(favMovies)                   //To search for index that's not listed in the array.

                                         //We could of used let favMovies but const works well with array methods.

console.log("Methods Revisited answered")


//WHERE IS WALDO

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", 
//                     ["Lucinda", "Frank", "Snoop"], 
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(2,1);
// console.log(whereIsWaldo)

// whereIsWaldo.splice(1,0);
// console.log(whereIsWaldo)

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", 
                    ["Lucinda", "Neff", "Snoop"], 
                    ["Petunia", ["Baked Goods", "Waldo"]]];

                    console.log(whereIsWaldo)

console.log(whereIsWaldo[1])

whereIsWaldo.splice(2);
console.log(whereIsWaldo)

whereIsWaldo.copyWithin(2, 1, "No One");
console.log(whereIsWaldo)

//EXCITED KITTEN

const cat = "excited";

for (let i=0; i < 20; i++){

    if (i % 2 === 0)
    console.log(i)
    console.log("...human...why you taking pictures of me?...")

}  {

    console.log("...the catnip made me do it...")

}  {

    console.log("why does the red dot always get away...")
}

let hype = "Love me, pet me! HSSSSSSS!";
console.log(hype.repeat(20))
console.log("Excited Kittens answered")

//FIND MEDIAN

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

// Expected output:
// => 15

function getSortedNums (nums){
    return nums.slice().sort ((a , b)  => a - b );

    }

// function findMedian(inputNums) {
//     let sortedNums = getSortedNums(inputArray);
//     let inputLength = inputArray.length;
//     let middleIndex = Math.floor(inputLength /2);
//     let oddLength = inputLength % 2!= 0;
//     let Median;
//     if(oddLength){
//         Median=sortedNums[middleIndex];
//     }else {
//         Median=sortedNums[middleIndex] + sortedNums[middleIndex - 1] / 2;
//     }
//     return Median;
// }

// //RETURN OF THE CLOSETS

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];


const thomsCloset =[
    [

    "grey button-up",         //Thoms shirts
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
],[
       // These are Thom's pants
    "grey pants",
    "jeans",
    "PJs"
],[
      // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
]
]

//ALIEN ATTIRE


kristynsCloset.shift("left shoe");
console.log(kristynsCloset)

const kristynsShoe= {

kristynsShoe :"left shoe",

}

thomsCloset.push(kristynsShoe);
console.log(thomsCloset)

//DRESSUP
//OUTFIT 1

console.log("Kristyn is wearing a " + kristynsCloset [0,2]  [0,2]  + thomsCloset[1,2] + " today.");

//OUTFIT 2

console.log("Thoms going to wear "  + thomsCloset[1,0] + " with " + kristynsCloset[2,2] + thomsCloset[2] + " to the event. ");

//OUTFIT 3

console.log("Kristyn looks faboulous in " + kristynsCloset[1 , 3] +  thomsCloset[ 2 ] +  " at the show. ");


// DIRTY LAUNDRY

let wash="WHIRR";


for (let index = 0; index < kristynsCloset.length; index++) {
	const wash = kristynsCloset[index];
} {
    console.log("WHIRR");
    
}

//INVENTORY

console.log(thomsCloset[0, 1, 2]);

console.log("Hungry for More: I tackled.. ")