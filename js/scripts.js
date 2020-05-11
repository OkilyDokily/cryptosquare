function findLowerSquare(number){
  var i = 1;
  while(true){
    var square = i * i;
    if (square > number){
      break;
    };
    i++;
  }
  return i - 1;
}
function findHigherSquare(number){
  var i = 1;
  while(true){
    var square = i * i;
    if (square > number){
      break;
    };
    i++;
  }
  return i;
}

function decideWhichWidthToUseForTable(number){
    if(isPerfectSquare(number)){
      return {columns:Math.floor(Math.sqrt(number)),rows: Math.floor(Math.sqrt(number))}
    }
    var lowerColumn = findLowerSquare(number);
    var numberOfRowsToAddToLowerSquare = findNumberOfRowsToAddToLowerSquare(lowerColumn, number)
    var rowsForLowerSquare = numberOfRowsToAddToLowerSquare + lowerColumn;


    var higherColumn = findHigherSquare(number);
    var numberOfRowsToSubtractFromHigherSquare = findNumberOfRowsToSubtractFromHigherSquare(higherColumn,number); 
    var rowsForHigherSquare = higherColumn - numberOfRowsToAddToLowerSquare;
    
    if(numberOfRowsToAddToLowerSquare < numberOfRowsToSubtractFromHigherSquare){
      return {columns:lowerColumn,rows:rowsForLowerSquare}
    }
    else if(numberOfRowsToSubtractFromHigherSquare < numberOfRowsToAddToLowerSquare){
      return {columns:higherColumn,rows:rowsForHigherSquare}
    }
    else{
      if(findNumberOfExcessCharactersOnTheHigherSquare(number) === findNumberOfExcessCharactersOnTheHigherSquare(number))
      {
        return {columns:lowerColumn,rows:rowsForLowerSquare}
      }
      else if(findNumberOfExcessCharactersOnTheHigherSquare(number) < findNumberOfExcessCharactersOnTheHigherSquare(number)){
        return {columns:lowerColumn,rows:rowsForLowerSquare}
      }
      else{
        return {columns:higherColumn,rows:rowsForHigherSquare}
      }
    }

}


function findNumberOfExcessCharactersOnTheLowerSquare(number){
  var lowerSquare = findLowerSquare(number);
  var numberOfRowsToAdd = findNumberOfRowsToAddToLowerSquare(lowerSquare,number);

  var rows = numberOfRowsToAdd + lowerSquare;
  
  var columns = lowerSquare;
  var total = columns * rows;
  return total - number;
}


function findNumberOfExcessCharactersOnTheHigherSquare(number){
  var higherSquare = findHigherSquare(number);
  var numberOfRowsToSubtract = findNumberOfRowsToSubtractFromHigherSquare(higherSquare,number);
  var rows = higherSquare - numberOfRowsToSubtract;
  
  var columns = higherSquare;
  var total = columns * rows;
  return total - number;
}

function isPerfectSquare(number){
  var test = Math.floor(Math.sqrt(number))
  return ((test * test) === number);
}

function findNumberOfRowsToAddToLowerSquare(lowerSquareRoot,number){
  var square = lowerSquareRoot * lowerSquareRoot;
  
  var totalOfRows = lowerSquareRoot + 1;
  var column = lowerSquareRoot;
  
  while(true){
    if((totalOfRows * column) >= number){
      return totalOfRows - lowerSquareRoot;
    }
    else{
      totalOfRows += 1;
    }
  }
}


function findNumberOfRowsToSubtractFromHigherSquare(higherSquareRoot,number){
  var square = higherSquareRoot * higherSquareRoot;
  
  var totalOfRows = higherSquareRoot - 1;
  var column = higherSquareRoot;
  
  while(true){
    if((totalOfRows * column) <= number){
      return higherSquareRoot - (totalOfRows + 1);
    }
    else{
      totalOfRows -= 1;
    }
  }
}



function encryptSentence(sentence){
 
  var wordsFlat = sentence.split("").filter(function(character){
    return /[a-z]/i.test(character);
  });

  var length = wordsFlat.length;


  var column = 8;
  var row = 9;
  //create the square
  var array2d = [];
  for(var i = 1; i <= row; i++) {
    if (wordsFlat.length < column){
      var length = wordsFlat.length
      array2d.push(wordsFlat.splice(0, wordsFlat.length).concat(Array(column - length).fill(" ")));
    }
    else{
    array2d.push(wordsFlat.splice(0,column));
    }
  }

  //flatten the square
  var new1dArray = [];
  for(var j = 0; j < column; j++){
    for(var i = 0; i < row; i++){
      new1dArray.push(array2d[i][j]); 
    }
  }

  var removeSpaces = new1dArray.filter(item => !(item === " "));
 

  finalArray = []
  while(removeSpaces.length > 0){
    if(removeSpaces.length < 5){
      finalArray.push(removeSpaces.splice(0,removeSpaces.length).join(""));
    }
    else{
      finalArray.push(removeSpaces.splice(0,5).join(""));
    }
  }

  var finalSentence = finalArray.join(" ");
  console.log(decideWhichWidthToUseForTable(401));
  console.log(decideWhichWidthToUseForTable(326));


}



$(document).ready(function(){
  encryptSentence("don't compare yourself to others, compare yourself to the person you were yesterday")
});