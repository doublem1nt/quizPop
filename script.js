// Array with properties of Questions, Options and Answer
var questions = [
{   q: "Question: Commonly used data types DO NOT include:", 
    o: [ "1. Strings", "2. booleans", "3. alerts", "4. numbers" ], 
    a: "3"
}, {   
    q: "Question: The condition in an if/ else statement is enlosed within ____?",
    o: [ "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets" ],
    a: "2"
}, {
    q: "Question: String values must be enclosed within ____ when being assigned to variables. ", 
    o: [ "1. commas", "2. curly brackets", "3. quotes", "4. parenthesis" ],
    a: "4"
}, {   
    q: "Question: A very useful tool used during development and debugging for printing content to the debugger is:", 
    o: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
    a: "4"
}, {   
    q: "Question: Arrays in Javascript can be used to store", 
    o: [ "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    a: "4"
}]

// element variables 
var secObj = document.getElementById("timeLeft"); //timer
var qSection = document.getElementById("questionSlot");
var oSection = document.getElementById("optionSlot");
var startBtn = document.getElementById("startButton"); // start button

var modalSlot = document.getelemenbyId("modalSlot")
var seeScoresBtn = document.getElementById("highscoresLink");
var 

var score = 0;
var time = 30;

function begin() {
    for (i=0; i < questions.length; i++){
        qSlot.textContent = questions[i].q;
        
    }

}


startBtn.addEventListener("click", function(){
    homePage = false;
    setTime();
    setChoiceBtn();
    begin();
})

questions[0].q[0]

var answers = [ "Answer 1", "Answer 2", "Answer 3" ]



// activate start of the quiz

function setTime(){
    var timerInterval = setInterval(function() {
        time--;
        secObj.textContent = time + " seconds remaining!";

        if (time ===0) {
            clearInterval(timerInterval); // stops time
            time = 30;
            highscoresPage();
            console.log(time);
        }
    }, 1000) 
}
