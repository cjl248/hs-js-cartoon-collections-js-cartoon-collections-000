
/* Dwarf Roll Call: this function should accept an array of dwarf names and should then return a string with the numbered dwarves. */

function dwarfRollCall(dwarves) {
  var answer = "";
  var dwarvesArrayLength = dwarves.length;
  var halfDwarvesArrayLength = (dwarvesArrayLength/2);
  
  for (var i = 0; i < halfDwarvesArrayLength; i++) {
    answer += i + 1 + ". " + dwarves[i] + " ";
  }
  return answer
}



/* Summon Captain Planet: this function should accept an array of planeteer calls, and convert each element to uppercase and add an exclamation point at the end. */

function summonCaptainPlanet(planeteerCalls){
  var ans = [];
  var callsArrayLength = planeteerCalls.length;
  
  for (var i = 0; i < callsArrayLength; i++) {
    var currentElement = planeteerCalls[i].toUpperCase();
    currentElement = currentElement + "!";
    ans.push(currentElement);
  }
  return ans;
}



/* Long Planeteer Calls: this method should accept an array of calls. The function should tell us if any of the calls are longer than four characters. */

function longPlaneteerCalls(words) {
  var ans;
  var arrayLength = words.length;
  
  for (var i = 0; i < arrayLength; i++ ) {
    var currentWord = words[i];
    var currentWordLength = currentWord.length;
    if (currentWordLength <= 4) {
      ans = false;
    } else {
      ans = true;
    }
  }
  return ans;
}



/* Find the Cheese: this function should accept an array of strings. It should then look through these strings and return the first string that is a type of cheese. The types of cheese that appear are cheddar, gouda, and camembert. */

function findTheCheese (foods) {
  
  // return first cheese in food array as string
  var cheeses = ["cheddar", "gouda", "camembert", "swiss"];
  var foodsLength = foods.length;
  
  for(var i = 0; i < foodsLength; i++) {
    var currentFood = foods[i];
    var cheesesLength = cheeses.length;
    
    for (var j = 0; j < cheesesLength; j++) {
      var currentCheese = cheeses[j];
      
      if (currentFood === currentCheese) {
        return currentCheese;
      }
    }
  }
  return "no cheese!";
}

//return new array with all of the words of input array words that start with letter b

var input = ["grapes", "bob", "car"];

function wordsWithB(words) {
  var answer = [];
  var wordsLength = words.length;
  
  for (var i = 0; i < wordsLength; i++) {
    var currentThing = words[i];
    var firstLetter = currentThing[0];
    if (firstLetter === "b") {
      answer.push(currentThing);
    }
  }
 return answer
}