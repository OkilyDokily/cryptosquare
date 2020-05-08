function encryptSentence(sentence){
 var length = sentence.split("").filter(function(character){
  return /[a-z]/i.test(character);
 }).length;

 var words = sentence.split(" ").map(function (word){
  return word.split("").filter(function(character){
    return /[a-z]/i.test(character);
  });
});


var column = 8;
var row = 9;
var wordsFlat = words.flat();
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
console.log(array2d);
console.log(length);
console.log(words);
}



$(document).ready(function(){
  encryptSentence("don't compare yourself to others, compare yourself to the person you were yesterday")
});