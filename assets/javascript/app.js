//Counter
let trivTime = 0;
let correctCount = 0;
let incorrectCount = 0;
let questionsAnswersCount = 1;

const correctMessage = 'Correct!!!';
const incorrectMessage = 'Incorrect, better luck next time! ¯\\_(ツ)_/¯';
const gameOverMessage = 'Game over, do you wanna try again?';
const newGamebtn = 'New Game?';

let timer = '';
const questionsAnswers = {
            1:{
                question:'In S1E1 "Pilot": Who started their first day at Dunder Mifflin Scranton?',
                answers:['Jim Halpert', 'Ryan Howard', 'Michael Scott', 'Erin Hannon'],
                correctAnswer: 'Ryan Howard',
                imageUrl:'assets/images/ryanhoward.gif'
               },
            2:{
                question:'In S1E2 "Diversity Day": What famous comedian\'s stand up routine does Michael imitate?',
                answers:['Chris Rock', 'Richard Pryor', 'Robin Williams', 'George Carlin'],
                correctAnswer:'Chris Rock',
                imageUrl:'assets/images/chrisrock.gif'
            },
            3:{
                question:'In S1E3 "Health Care": Which of these is NOT one of Jim and Pam\'s made up diseases?',
                answers:['Killer nanorobots', 'Hot Dog Fingers', 'Spontaneous Dental Hydroplosion', 'Hair Cancer'],
                correctAnswer:'Spontaneous Dental Hydroplosion',
                imageUrl:'assets/images/jimpam.gif'
            },           
    };

const start = function(){
    //When buttons is clicked clear trivSection
    $('#start').on('click',function(){
        //Emptys trivia section
        $('#game').empty();
        createQuestions();
    });
}
const createQuestions = function(){
    timerStart();
    //Get question
    let question = questionsAnswers[questionsAnswersCount].question;
    //assign div element to newDiv
    let newDiv = $('<div>');
    //Add a class to newDIv
    newDiv.addClass('question');
    //Add text to question
    newDiv.text(question);
    //Add question to DOM
    $('#game').append(newDiv);
    createAnswers();
}
const createAnswers = function(){
    let answerLength = questionsAnswers[questionsAnswersCount].answers.length;
    for(let i = 0; i < answerLength;i++){
        //get answers
        let answers = questionsAnswers[questionsAnswersCount].answers[i];
        //Create new div to hold answers
        let newBtn = $('<button>');
        //Add class to new Div
        newBtn.addClass('answers redBtn btn btn-info');
        //Give buttons attribute
        newBtn.attr('data-type', answers);
        //add text to new Div
        newBtn.text(answers);
        //Add answers to DOM
        $('#game').append(newBtn);
    }
    //Prevents click event from being saved
    $(document).off('click','.answers',checkAnswer);
    $(document).on('click','.answers',checkAnswer);
}
const checkAnswer = function(){
     //Get users answer choice
    let userAnswer = $(this).data('type');
    let correctAnswer = questionsAnswers[questionsAnswersCount].correctAnswer;
    let correctImg = questionsAnswers[questionsAnswersCount].imageUrl;

    let correct = questionsAnswers[questionsAnswersCount].correct;
    let incorrect = questionsAnswers[questionsAnswersCount].incorrect;
    // console.log(questionsAnswersCount);
    if(userAnswer === correctAnswer){
        //Update correctCount
        correctCount++;
        //Clears out triv Section
        $('#game').empty();
        let newImg = $('<img>');
        newImg.attr('src',correctImg);
        newImg.addClass('img-fluid');
        $('#game').append(newImg);
        //Create Div
        let newDiv = $('<div>');
        //Give div class
        newDiv.addClass('correctAnswer img-fluid');
        //adds CORRECT! text to div
        newDiv.text(correctMessage);
        //Add answer to DOM
        $('#game').append(newDiv);
        //Stops Time
        clearInterval(timer)
        //Add 1 to question count to move to the next question
        questionsAnswersCount++;
        if(questionsAnswersCount <= 3){
            //removes CORRECT! text and continues to create next question after 3 seconds
            setTimeout(
                function(){
                    $('#game').empty();
                    createQuestions();
                    },3500);
        } else {
            $('#game').empty();
            let newImg = $('<img>');
            newImg.attr('src',correctImg);
            newImg.addClass('img-fluid');
            $('#game').append(newImg);
            //Create Div
            let newDiv = $('<div>');
            //Give div class
            newDiv.addClass('correctAnswer img-fluid');
            //adds CORRECT! text to div
            newDiv.text(correctMessage);
            //Add answer to DOM
            $('#game').append(newDiv);
            //Stops Time
            clearInterval(timer)
            //Reset
            setTimeout(gameOver, 3500);
        };
    } else {
        incorrectCount++;
        //Clears out triv Section
        $('#game').empty();
        let newImg = $('<img>');
        newImg.attr('src',correctImg);
        newImg.addClass('img-fluid');
        $('#game').append(newImg);
        let newDiv = $('<div>');
        //Give div class
        newDiv.addClass('incorrectAnswer img-fluid');
        //adds incorrect! text to div
        newDiv.text(incorrectMessage);
        //Add answer to DOM
        $('#game').append(newDiv);
        //Stops Time
        clearInterval(timer)
        //Add 1 to question count to move to the next question
        questionsAnswersCount++;
        
        if(questionsAnswersCount <= 3){
            setTimeout(function(){
            $('#game').empty();
            createQuestions();
            },3500);
        } else {
            //Clears out triv Section
            $('#game').empty();
            let newImg = $('<img>');
            newImg.attr('src',correctImg);
            newImg.addClass('img-fluid');
            $('#game').append(newImg);
            let newDiv = $('<div>');
            //Give div class
            newDiv.addClass('incorrectAnswer img-fluid');
            //adds incorrect! text to div
            newDiv.text(incorrect);
            //Add answer to DOM
            $('#game').append(newDiv);
            //Stops Time
            clearInterval(timer);
            //Reset
            setTimeout(gameOver, 3500);
        }
    }
};

const timerStart = function(){ 
    $('#game').empty();
    //Sets time to 10
    trivTime = 100;
    //Progress Bar
    let timeTag = $('<div>');
    timeTag.addClass('time');
    timeTag.addClass('progress');
    let progressBar = $('<div>');
    progressBar.addClass('progress-bar progress-bar-striped bg-warning');
    progressBar.width(trivTime + '%');

    $('#game').append(timeTag);
    $('.time').append(progressBar); 
    //Decrements Time
    timer = setInterval(timeDecrement,100);
}
const timeDecrement = function(){ 
    //Progress bar decrement
    $('.progress-bar').width(trivTime + '%');
    trivTime--;
    //if time gets to 0
    if(trivTime === -10){
        userAnswer = false;
        //Clears Time
        clearInterval(timer);
        checkAnswer();
    }
    
}
const gameOver = function(){
    //Remove everything in trivia section
    $('#game').empty();
    //Remove everthing in timer section
    $('#game').empty();
    let scoreDiv = $('<div>');
    scoreDiv.addClass('score');
    scoreDiv.html('Correct: ' + correctCount + '<br>' + 'Incorrect: ' + incorrectCount);
    $('#game').append(scoreDiv);
    //Assign new div element to new Div
    let newDiv = $('<div>');
    //add class to new Div
    newDiv.addClass('gameOver');
    //add game over text
    newDiv.text(gameOverMessage);
    //Append game over text to DOM
    $('#game').append(newDiv);
    //Create ResetButton
    let newBtn = $('<button>');
    //Give btn Class
    newBtn.addClass('redBtn btn btn-warning resetBtn');
    //Give btn reset Text
    newBtn.text(newGamebtn);
    //Append
    $('#game').append(newBtn);
    //Reset all value
    trivTime = 100;
    questionsAnswersCount = 1;
    correctCount = 0;
    incorrectCount = 0;
    //When reset button is clicked.......
    $('.resetBtn').on('click',function(){
        $('#game').empty()
        //Starts game over
        createQuestions();
    });
}

start();
