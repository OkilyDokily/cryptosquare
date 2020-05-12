
function createTableDimensions(number){
    var lowerColumn = Math.floor(Math.sqrt(number));
    if((lowerColumn * lowerColumn) === number){
      return {columns:Math.floor(Math.sqrt(number)),rows: Math.floor(Math.sqrt(number))}
    }
    
    var higherColumn = lowerColumn + 1

    if(((higherColumn * higherColumn) - number) < higherColumn){
      return {columns:higherColumn,rows: higherColumn}
    }

    else{
      return {columns:lowerColumn,rows:lowerColumn + 1}
    }

}

function encryptSentence(sentence){
 
  var wordsFlat = sentence.split("").filter(function(character){
    return /[a-z]/i.test(character);
  });

  var length = wordsFlat.length;
  var table = createTableDimensions(length);

  var column = table.columns;
  var row = table.rows;
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
  console.log(finalSentence)


}



$(document).ready(function(){
  
  encryptSentence("don't compare yourself to others, compare yourself to the person you were yesterday")
});