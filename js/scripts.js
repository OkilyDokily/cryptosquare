function encryptSentence(sentence){
 var length = sentence.split("").filter(function(character){
  /[a-z]/i.test(character);
 }).length;

 var words = sentence.split(" ").map(function (word){
  return word.split("").filter(function(character){
    return /[a-z]/i.test(character);
  });
});
console.log(length);
console.log(words);
}



$(document).ready(function(){
  encryptSentence("don't compare yourself to others, compare yourself to the person you were yesterday")
});