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
    var btnContainer = document.getElementById("buttonCont");
    
    var scoreWin = 0;
    var highscoresArr = [];

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
        if (userClick === questionsArr[qIndex].answer && qIndex !== 4) {
            outputSlot.setAttribute("style", "color:green");
            outputSlot.textContent = "Correct!";
            timerSlot.setAttribute("style", "color:gray");
            timerSlot2.textContent = "";
            qIndex++;
            displayQuiz();
        } else if (userClick === questionsArr[qIndex].answer && qIndex === 4){
            scoreWin = secondsTimer;
            timerSlot = "";
            qSlot.textContent="FINISHED!"
            ulSlot.textContent = "";
            outputSlot.innerHTML = "CONGRATS, You've finished the Quiz successfully! <p> Your time will be registered as your score: " + scoreWin + ".";
            outputSlot.setAttribute("style", "color:green");
            displayEndInput();
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
    qSlot.innerHTML = "";
    ulSlot.innerHTML = "";
    outputSlot.innerHTML = "You failed, <button id=retryBtn>Retry?</button>";
    secondsTimer = 0;
    var retryObj = document.getElementById("retryBtn");
    retryObj.addEventListener("click", (brandNew));
}


function brandNew (event){
    qSlot.innerHTML = "";
    ulSlot.innerHTML = "";
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
    var buildInput = document.createElement("input");
    buildInput.setAttribute("type", "text");
    buildInput.setAttribute("id", "initials");
    buildInput.setAttribute("placeholder", "Your Initial");
    buildInput.textContent = "";

    btnContainer.append(buildInput);

    var buildSubmit = document.createElement("button");
    buildSubmit.setAttribute("type", "submit");
    buildSubmit.setAttribute("id", "Submit");
    buildSubmit.textContent = "Submit";

    btnContainer.append(buildSubmit);

    var initialsUser = document.querySelector("#initials");

    buildSubmit.addEventListener("click", function() {
        var userInitials = initialsUser.value;

        if (userInitials === "") {
            outputSlot.textContent = "Error: Initials cannot be blank.";
        } else {
        var userScoreArr = {
            user: userInitials, 
            score: scoreWin,
        };
        highscoresArr.push(userScoreArr);
        console.log(userScoreArr);
        console.log(highscoresArr);
        }
    })
}
















