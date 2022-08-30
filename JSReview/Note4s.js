// Iterating with a for loop

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  
  };
  
  const objToArray = [];
  // ADD CODE HERE
  for (const property in checkObj){  
   if (checkObj[property] >= 2) {               //You can name your property whatever you want.
     objToArray.push(checkObj[property])
   }
  }
  console.log(objToArray)
