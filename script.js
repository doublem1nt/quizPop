// Array with properties of Questions, Options and Answer
var questionsArr = [
{   question: "Question: Commonly used data types DO NOT include:", 
    options: [ "1. Strings", "2. booleans", "3. alerts", "4. numbers" ], 
    answer: "3. alerts"
}, {   
    question: "Question: The condition in an if/ else statement is enlosed within ____?",
    options: [ "1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets" ],
    answer: "2. curly brackets"
}, {
    question: "Question: String values must be enclosed within ____ when being assigned to variables. ", 
    options: [ "1. commas", "2. curly brackets", "3. quotes", "4. parenthesis" ],
    answer: "4. parenthesis"
}, {   
    question: "Question: A very useful tool used during development and debugging for printing content to the debugger is:", 
    options: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: "4. console.log"
}, {   
    question: "Question: Arrays in Javascript can be used to store", 
    options: [ "1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above" }];

    // timer variable objects
    var secondsTimer = 60;
    
    // nav bar w/ Highscores & Timer display objects
    var highscoresBtn = document.getElementById("highscoresBtn");
    var timerSlot = document.getElementById("timer1st");
    var timerSlot2 = document.getElementById("timer2nd");

    // question objects
    var qSlot = document.querySelector("#questionSlot");
    var ulSlot = document.querySelector("ul");
    var outputSlot = document.querySelector("#cpuComment");
    var qIndex=0; // remember to reset back to 0 once retake begins


    // homepage display objects
    var startBtn = document.getElementById("startBtn");
    // var starterCont = document.getElementById("starterCont");

startBtn.addEventListener("click", function() {
    startBtn.setAttribute("style", "display:none");
    setTime();
})

function setTime() {
    var timerInterval = setInterval(function() {
        secondsTimer--;
        timerSlot.textContent = secondsTimer + " seconds remaining until end!";
        timerSlot2.textContent = "";
        if (secondsTimer <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
    displayQuiz();
}

function displayQuiz() {
    if (secondsTimer <= 0) {
        displayHighscores();
    } else {
        qSlot.innerHtml = "";
        ulSlot.innerHTML = "";
        qSlot.textContent = questionsArr[qIndex].question;
        for (var i =0; i< questionsArr[i].options.length; i++){
            var liNewEl = document.createElement("li");
            liNewEl.setAttribute("style", "list-style-type:none");
            liNewEl.innerHTML = "<button>" + questionsArr[qIndex].options[i]+ "</buton>";
            ulSlot.append(liNewEl);
            liNewEl.addEventListener("click", (userInput));
        }
    }
}

function userInput(event){
    var userClick = event.target.textContent;
    if(secondsTimer > 0) {
        if (userClick == questionsArr[qIndex].answer) {
            outputSlot.setAttribute("style", "color:green");
            outputSlot.textContent = "Correct!";
            timerSlot.setAttribute("style", "color:gray");
            timerSlot2.textContent = "";
            qIndex++;
            displayQuiz();
        } else if (secondsTimer > 5) {
            outputSlot.setAttribute("style", "color:red");
            outputSlot.textContent = "Incorrect! Your available time has been reduced by 5 seconds!";
            timerSlot.setAttribute("style", "color:red");
            secondsTimer = secondsTimer - 5;
            timerSlot2.textContent = "Ouch! Minus 5 seconds";
            timerSlot2.setAttribute("style", "color: red");
        } else {
            outputSlot.setAttribute("style", "color:red");
            outputSlot.textContent = "Incorrect! Ran out of time!";
            timerSlot.setAttribute("style", "color:red");
            secondsTimer = 1;
            failure();
        }
    } else {
        failure();
    }
}

function failure() {
    outputSlot.innerHTML = "You failed, <button id=retryBtn>Retry?</button>";
    qSlot.innerHTML = "";
    ulSlot.innerHTML = "";
    secondsTimer = 0;
    var retryObj = document.getElementById("retryBtn");
    retryObj.addEventListener("click", (brandNew));
}


function brandNew (event){
    event.preventDefault();
    qIndex = 0;
    secondsTimer = 60;
    timerSlot.textContent = "This Quiz has a";
    timerSlot.setAttribute("style", "color:grey");
    timerSlot2.textContent = "limited time!";
    timerSlot2.setAttribute("style", "color:grey");
    outputSlot.innerHTML = "";
    startBtn.setAttribute("style", "");
    
}

function displayHighscores(){
    console.log("Display Highscores Function here!")
}

function displayEndInput() {
    console.log("Display End Input - Window for User to add their Initials to Highscore!");
}
















