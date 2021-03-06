## QuizPop

Build a quiz application that maintains highscores in the browser's local storage and has penalties when incorrect answers are provided.

## Description

Assignment to design a dynamically built Quiz Pop utilizing HTML, CSS & Javascript. A heavy focus on the Document Object Model to manipulate static HTML elements and create a Quiz for coders. Features of the quiz include 1. a timer, 2. a highscore and 3. a variety of buttons to submit user scores, retry the quiz from the beginning and clear previous highscore saves. 

## Functionality

The Timer begins once user utilizes the Begin button. During the quiz, if user chooses the incorrect answer, the application will respond with appropriate feedback, highlighting that the timer has been reduced by 5 seconds (as penalty) and that their choice was incorrect. Upon receipt of a correct input, timer is unchanged and user may continue towards the finish. 

Highscore functionality utilizes local storage of the web browser to maintain previous user intiials and scores. Highscore display is accessible at the end of a successful attempt at the quiz, as well as a direct button in the top left corner. If there are no previous highscore history, the top left corner button will not function and output to the user why it will not display. 

The application buttons include the following: begin, restart quiz, highscore and clear highscores are different points during the application's run. During the quiz taking portion, options for the user to choose from (in response to the question) are dynamically created for the user to click and an immediate response for the status of that option will be displayed below the buttons. 

## GIF / Snapshot

![code quiz](./images/demo.gif)

## Deployed Website
https://doublem1nt.github.io/quizPop/

## Installation
`Index.html`, `Style.Css` and `Script.js` need to be in the same directory/folder for the application to run properly. 

## Credits 
Triology Education Services provided prompt, course & instruction. 

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact

Jonathan Yee
Junior Developer
jyeewasabi@gmail.com
