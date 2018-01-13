//parts of the sentences are stored in arrays: beginning, middle & end
var talk_beginning = ["Hi!", "Good morning!", "Good day!", "Good evening!", "Hello!"]
var talk_middle = [" How are you?", " What's new?", " What's up?", " What happened?", " What's going on?"]
var talk_end = [" Where were you yesterday?", " Did you watch the game last night?", " Would you like a coffee?",  
       " Are you hungry?", " Are you tired?"]

var clothes_beginning = ["I saw ", "I bought ", "I wear ", "I stained ", "I ordered "];
var clothes_middle = ["leather jacket ", "cashmere sweater ", "black hat ", "blue jeans ", "nice shoes "];
var clothes_end = ["in Paris.", "in London.", "in Rome.", "in Dublin.", "in Berlin.",];


function newQuote() {

  var number = Number(prompt("How many quotes do you want to see? (from 1 to 5): "));
  while ((number < 1) || (number > 5) || (isNaN(number) === true)) {
    number = Number(prompt("Please enter the number from 1 to 5"));
    
  }

  console.log("You entered number " + number);
  var type = prompt("Please select the type of the quotes (Talk or Clothes) ");
  while ((type !== "talk") && (type !== "clothes")) {
    type = prompt("Please select from Talk or Clothes quotes ");
  }

  console.log("You have chosen " + type + " quotes:");
  if (type === "talk") {
    for (i = 1; i <= number; i++) {
      var randomNumber1 = Math.floor(Math.random() * talk_beginning.length);
      var randomNumber2 = Math.floor(Math.random() * talk_middle.length);
      var randomNumber3 = Math.floor(Math.random() * talk_end.length);
      console.log(talk_beginning[randomNumber1] + talk_middle[randomNumber2] + talk_end[randomNumber3]);
    }

  } else if (type === "clothes") {
    for (j = 1; j <= number; j++) {
      var randomNumber4 =Math.floor(Math.random() * clothes_beginning.length);
      var randomNumber5 =Math.floor(Math.random() * clothes_middle.length);
      var randomNumber6 =Math.floor(Math.random() * clothes_end.length);
      console.log(clothes_beginning[randomNumber4] + clothes_middle[randomNumber5] + clothes_end[randomNumber6]);
    }
  }

  repeat();
}


function repeat() {
  
  var choice = prompt("Generate more quotes or exit the program (continue or exit)");
  while ((choice !== "continue") && (choice !== "exit")) {
    choice = prompt("Please type continue or exit");
  }


  if (choice == "continue") {
    newQuote();

  } else if (choice == "exit") {
    console.log("Goodbye!");
  }
}

newQuote();

