var page = $("#quiz-area");

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
}];

var timer; 

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("Time up");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#questions").prepend("<h2>Time remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#play").remove();

    for (var i = 0; i < triviaSet.length; i++) {
      page.append("<h2>" + triviaSet[i].question + "</h2>");
      for (var j = 0; j < triviaSet[i].choices.length; j++) {
        page.append("<input type='radio' name='question-" + i + "' value='" + triviaSet[i].choices[j] + "''>" + triviaSet[i].choices[j]);
      }
    }
    page.append("<button id='done'>Done</button>");
  },

  done: function () {

    $.each($("input[name='question-0']:checked"), function () {
      if ($(this).val() === triviaSet[0].validAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function () {
      if ($(this).val() === triviaSet[1].validAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function () {
      if ($(this).val() === triviaSet[2].validAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function () {
      if ($(this).val() === triviaSet[3].validAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();
},

  result: function () {

    clearInterval(timer);

    $("#questions h2").remove();

    page.html("<h2>All Done!</h2>");
    page.append("<h3>Correct Answers: " + this.correct + "</h3>");
    page.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    page.append("<h3>Unanswered: " + (triviaSet.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#play", function () {
  game.start();
});


$(document).on("click", "#done", function () {
  game.done();
});



// $("#play").click(function () {
//   $(this).hide();
//   displayTrivia();
// }); 

//   var game = {

//     triviaSet: triviaSet,
//     currentQuestion: 0,
//     counter: countStartNumber,
//     correct: 0,
//     incorrect: 0,
//   };

// function displayTrivia() {
//   displayQuestions.html("<h2>" + triviaSet[this.currentQuestion].triviaSet + "</h2>");
//   question++;

//   var choicesArr = triviaSet[0].choices;
//   var buttonsArr = [];

//   for (let i = 0; i < choicesArr.length; i++) {
//     var button = $('<button>');
//     button.text(choicesArr[i]);
//     button.attr('data-id', i);
//     $('#choices_div').append(button);
//   }

// } 
// });