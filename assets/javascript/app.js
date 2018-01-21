var page = $("#questions");

//holds value for counter
var timer;
var unanswered = 0;
var question = 0;

//Variable and object where all trivia questions are held
var triviaSet = [{
  question: "Where was Salvador Dali born? ",
  choices: ["France", "Germany", "Spain", "Portugal"],
  validAnswer: "Spain"
},

{
  question: "In what year was Salvador Dali born?",
  choices: ["1904", "1987", "1910", "1820"],
  validAnswer: "1904"
},

{
  question: "Which of these most accurately describes Dali's style of art?",
  choices: ["Cubism", "Abstract", "Modernism", "Surrealism"],
  validAnswer: "Surrealism"
},

{
  question: "Which vegetable did Dali find deep meaning in?",
  choices: ["Carrots", "Kale", "Cauliflower", "Beets"],
  validAnswer: "Cauliflower"
},
];

//entire game
var trivia = {
  correctAnswer: 0,
  incorrectAnswer: 0,

  //Play Function
  play: function () {
    $("#counter").prepend("<h2> Time Left: <span id= 'counter'>100</span> Seconds</h2>");

    for (var i = 0; i < triviaSet.length; i++) {
      page.append("<h2>" + triviaSet[i].question + "</h2>");
    }
  }
}

//Timer countdown
//from jenny...resultCalculator is her var// set timer in a wrapping function

timer = setInterval(function () {
  count: 10,
  
  $("#timer").html(count--);
  if (count == -1) {
    clearInterval(timer);
    resultCalculator();
  }
});






//On Click buttons
$(document).on("click", "#play", function () {
  game.play();
});
$(document).on("click", "#done", function () {
  game.done();
});