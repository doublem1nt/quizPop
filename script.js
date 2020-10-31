var seeScores = document.getElementById("scoresLink");
var secObj = document.getElementById("timeLeft");

var question = document.getElementById("questionSlot");
var answers = document.getElementById("answerOptions");
var buttons = document.getElementById("buttonArea");
var startBtn = document.getElementById("startButton");

var homePage = true;
var score = 0;
var time = 30;

var btn1 = document.getElementById("choice1");
var btn2 = document.getElementById("choice2");
var btn3 = document.getElementById("choice3");
var btn4 = document.getElementById("choice4");

var option1 = false;
var option2 = false;
var option3 = false;
var option4 = false;

// creates all of the buttons once the quiz begins
function setChoiceBtn() {
    startBtn.style.visibility = "hidden";
    btn1.style.visibility = "visible";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
    btn4.style.visibility = "visible";
}

btn1.addEventListener("click", function(){
    option1 = true;
    console.log("option1 is" +option1);
});

btn2.addEventListener("click", function(){
    option2 = true;
});

btn3.addEventListener("click", function(){
    option3 = true;
});

btn4.addEventListener("click", function(){
    option4 = true;
});


startBtn.addEventListener("click", function(){
    homePage = false;
    setTime();
    setChoiceBtn();
})



var questions = [
    { q: "Question: What is Harry Potter's Patronus?", a: "4"},
    { q: "Question: What does the Imperius Curse do?", a: "2"},
    { q: "Question: Who dies during the third Tri-wizard Tournament? ", a: "2"},
    { q: "Question: What does Dumbledore give to Ron in his will?", a: "1"},
    { q: "Question: Who was the Hogwarts headmaster right before Dumbledore?", a: "2"},
    { q: "Question: What is Dumbledore’s first name?", a: ""},
    { q: "Question: What is the last name of the family Harry Potter lives with at the beginning of the story?", a: ""},
    { q: "Question: When the story starts, where was Harry’s room at the Dursley’s located?", a: ""},
    { q: "Question: When Harry visited the zoo on Dudley’s birthday, which animal did he end up talking to?", a: ""},
    { q: "Question: Which birthday does Harry begin in a shack on a rock in the middle of the water?", a: ""}
]

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







// Question: What is Harry Potter’s patronus?

// A horse
// An otter
// A hare
// A stag
// Correct answer: A stag (or male deer)

// Question: What does the Imperius Curse do? 

// Mimics
// Controls
// Kills
// Tortures
// Correct answer: Controls

// Question: Who dies during the third Tri-wizard Tournament? 

// Viktor Krum
// Cedric Diggory
// Fleur Delacour
// Cormac McLaggen
// Correct answer: Cedric Diggory

// Question: What does Dumbledore give to Ron in his will?

// Deluminator
// Invisibility cloak
// Portrait
// Wand
// Correct answer: Deluminator

// Question: Who was the Hogwarts headmaster right before Dumbledore?

// Phineas Nigellus
// Armando Dippet
// Dolores Umbridge
// Dexter Fortescue
// Correct answer: Armando Dippet

// 1. What is Dumbledore’s first name?

// Albus

// 2. What is the last name of the family Harry Potter lives with at the beginning of the story?

// Dursley

// 3. When the story starts, where was Harry’s room at the Dursley’s located?

// Under the stairs

// 4. When Harry visited the zoo on Dudley’s birthday, which animal did he end up talking to?

// A snake

// 5. Which birthday does Harry begin in a shack on a rock in the middle of the water?

// Eleventh

// 6. What does Hagrid give Harry for his eleventh birthday?

// A cake

// 7. Who was the first person to tell Harry he was a wizard?

// Hagrid

// 8. What is a Muggle?

// A person who can’t do magic