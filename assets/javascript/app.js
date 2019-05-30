$(document).ready(function () {


    
//start the game - 30 second timer

//display questions
$("#start").on("click", function(){
    for(var i=0;i<triviaGame.length;i++){
         $("buttonDiv").append("<p>"+triviaGame[i].question+"</p>");
            for(var j=0; j<triviaGame[i].answer.length;j++){
                $("#buttonDiv").append("<input type='radio' name='question-"+i+"' value='"+triviaGame[i].answer[j]+"'>"+triviaGame[i].answer[j])
            }
        }
})


    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timeRemaining = 30;
    var correct;
    var triviaGame = [{
        question: "Question1",
        answer: ["answer1", "answer2", "answer3", "answer4"],
        correct: "0, 1, 2, 3",
        image: ("assets/images/image.jpg")
    }, {
        question: "Question 1",
        answer: ["answer1", "answer2", "answer3", "answer4"],
        correct: "0, 1, 2, 3",
        image: ("assets/images/image.jpg")
    }, {
        question: "Question 1",
        answer: ["answer1", "answer2", "answer3", "answer4"],
        correct: "0, 1, 2, 3",
        image: ("assets/images/image.jpg")
    }, {
        question: "Question 1",
        answer: ["answer1", "answer2", "answer3", "answer4"],
        correct: "0, 1, 2, 3",
        image: ("assets/images/image.jpg")
    }, {
        question: "Question 1",
        answer: ["answer1", "answer2", "answer3", "answer4"],
        correct: "0, 1, 2, 3",
        image: ("assets/images/image.jpg")
    }, {
        question: "Question 1",
        answer: ["answer1", "answer2", "answer3", "answer4"],
        correct: "0, 1, 2, 3",
        image: ("assets/images/image.jpg")
    }, {
        question: "Question 1",
        answer: ["answer1", "answer2", "answer3", "answer4"],
        correct: "0, 1, 2, 3",
        image: ("assets/images/image.jpg")
    }, {
        question: "Question 1",
        answer: ["answer1", "answer2", "answer3", "answer4"],
        correct: "0, 1, 2, 3",
        image: ("assets/images/image.jpg")
    }];


    var intervalID = setInterval(myTimer, 1000);

function myTimer() {
timeRemaining --;
if (timeRemaining === 0) {
gameOver()
}

console.log(timeRemaining);
}


function gameReset() {
    correct = 0; 
    incorrect = 0; 
    unanswered = 0;
    timeRemaining = 30;
}


//reset the game if timer reaches zero
function gameOver() {
    alert("Game over");
    gameReset();
}


//display buttons for multiple choice answers
    // event listeners for the onclicks - when choosing an answer, and when submitting

//upon submit, display correct/incorrect/unanswered

//when timer reaches zero, display correct/incorrect/unanswered 

//reset after submit

})