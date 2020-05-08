function encryptSentence(sentence){
 var length = sentence.split("").filter(function(item){
   return /[a-z]/i.test(item)
 }).length;
}


$(document).ready(function(){
  
  encryptSentence("don't compare yourself to others, compare yourself to the person you were yesterday")
});