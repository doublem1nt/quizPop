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
    var timerSlot = document.getElementById("timeLeft");

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
        if (secondsTimer === 0) {
            clearInterval(timerInterval);
            displayEndInput();
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
        qSlot.innerHTML = questionsArr[qIndex].question;
        for (var i =0; i< questionsArr[i].options.length; i++){
            var liNewEl = document.createElement("li");
            liNewEl.setAttribute("style", "list-style-type:none");
            liNewEl.innerHTML = "<button>" + questionsArr[qIndex].options[i]+ "</buton>";
            ulSlot.append(liNewEl);
            liNewEl.addEventListener("click", (userInput));
        }
    }
}

// highscoresBtn.addEventListener("click", function(event){
//     var target = event.target;
//     console.log(event.target);
// })

function userInput(event){
    var userClick = event.target.textContent;
    // console.log(questionsArr[qIndex].answer);
    // console.log(userClick);
    if(secondsTimer > 0) {
        if (userClick == questionsArr[qIndex].answer) {
            // console.log("Hello World");
            outputSlot.setAttribute("style", "color:green");
            outputSlot.innerHTML = "Correct!";
            timerSlot.setAttribute("style", "color:gray");
            qIndex++;
            displayQuiz();
        } else if (secondsTimer >= 0) {
            outputSlot.setAttribute("style", "color:red");
            outputSlot.innerHTML = "Incorrect! Your available time has been reduced by 5 seconds!";
            timerSlot.setAttribute("style", "color:red");
            secondsTimer = secondsTimer - 5;
        } 
    } else {
        outputSlot.innerHTML = "<button id=retryBtn>Retry?</button>";
        var retryObj = document.getElementById("retryBtn");
        // console.log(retryObj);
        retryObj.addEventListener("click", (brandNew));
        // displayEndInput();
    }
}

function brandNew (event){
    event.preventDefault();
    qIndex = 0;
    secondsTimer = 60;
    timerSlot.innerHTML = "This Quiz has a limited time!";
    qSlot.innerHTML = "Coding Quiz!";
    ulSlot.innerHTML = "";
    outputSlot.innerHTML = "";
    startBtn.setAttribute("style", "");
    
}

function displayEndInput() {
    console.log(qIndex);
}
















