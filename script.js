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
    var viewHsBtn = document.getElementById("viewHighScore");
    
    var scoreWin = 0;

startBtn.addEventListener("click", function() {
    startBtn.setAttribute("style", "display:none");
    setTime();
})

viewHsBtn.addEventListener("click", function() {
    if (localStorage.getItem("allScores") === null){
        outputSlot.textContent = "There is no highscores!";
    } else {
        displayHighscores();
    }
});

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
    outputSlot.textContent = "";
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
        qSlot.innerHTML = "";
        ulSlot.innerHTML = "";
        outputSlot.innerHTML = "You failed."
        restartQuiz();
    }
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
                initial: userInitials, 
                score: scoreWin,
            }
        }

        localStorage.setItem("user", JSON.stringify(userScoreArr));

        var allScores = localStorage.getItem("allScores");
        if (allScores === null){
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(userScoreArr);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        btnContainer.innerHTML = "";
        displayHighscores();
    })
}

function displayHighscores(){
    qSlot.innerHTML = "";
    ulSlot.innerHTML = "";
    btnContainer.innerHTML="";

    var h1El = document.createElement("h1")
    h1El.textContent=" High Scores";
    qSlot.appendChild(h1El);

    var allScores = localStorage.getItem("allScores");

    allScores = JSON.parse(allScores);
    if (allScores !==null){
        for (var i=0; i < allScores.length; i++){

            var liEl = document.createElement("li");
            liEl.textContent = allScores[i].initial + " [ " + allScores[i].score + " ] ";
            ulSlot.append(liEl);
        } 
    };
    restartQuiz();
}

function restartQuiz() {
if (scoreWin !== null)
    // create re-set button to erase local storage memmory
        var clearBtn = document.createElement("button");
        clearBtn.setAttribute("id", "clear");
        clearBtn.textContent = "Clear History";
        btnContainer.appendChild(clearBtn);
    
        clearBtn.addEventListener("click", function () {
            localStorage.clear();
            location.reload();
        })
    // create button to go back to beginning of the quiz page. 
        var restartBtn = document.createElement("button");
        restartBtn.setAttribute("id", "clear");
        restartBtn.textContent = "ReStart Quiz";
        btnContainer.appendChild(restartBtn);
    
        clearBtn.addEventListener("click", function () {
            localStorage.clear();
            location.reload();
        })
    
        restartBtn.addEventListener("click", function(){
            window.location.replace("./index.html");
    
    
    })

}