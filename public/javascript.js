var alphabet = "abcdefghijklmnopqrstuvwxyz";
var fullAlphabet = alphabet + alphabet + alphabet;
function hey(){
}
function runCipher(){
  var cipherText = document.getElementById("fname").value
  var cipherOffset = 5
  cipherOffset = (cipherOffset % alphabet.length);
  var cipherFinish = '';

  // Looping throught the cipherText
  for(i=0; i<cipherText.length; i++){
     
    // assigning a letter to `letter` variable
     var letter = cipherText[i];

     // upper = true/false. true if letter is originally capital
     var upper = (letter == letter.toUpperCase());
    
     // making letter lowercase
     letter = letter.toLowerCase();

     // returns the index of the current letter within the alphabet text: 0 - 25
     var index = alphabet.indexOf(letter);
    
     // check if it returns anything
     if(index == -1){
         // nope
      cipherFinish += letter; 
     } else {
         //yes 
        
       index = ((index + cipherOffset) + alphabet.length);
       var nextLetter = fullAlphabet[index];
       if(upper) nextLetter = nextLetter.toUpperCase();
       cipherFinish += nextLetter;
     }
  }

  document.getElementById("name").value = cipherFinish;
   
  
}

console.log('efef')

// jquery
$(document).ready(function() {
  $('#cypher').keypress(function(){
//has a timer of 20 seconds 
    setTimeout(function(){ runCipher(); },20);
  });
//runs cipher
  $('#cypher').blur(function(){
    runCipher();
  });
  $('#offset').change(function(){
    setTimeout(runCipher(),20);
  });
  
});