function encryptSentence(sentence){
 var length = sentence.split("").filter(function(character){
  return /[a-z]/i.test(character);
 }).length;

 var wordsFlat  = sentence.split("").filter(function(character){
  return /[a-z]/i.test(character);
 });



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


console.log(array2d);
console.log(length);
console.log(new1dArray);
}



$(document).ready(function(){
  encryptSentence("don't compare yourself to others, compare yourself to the person you were yesterday")
});