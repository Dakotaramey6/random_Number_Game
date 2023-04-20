//global var declaration from DOM
let submitButton = document.getElementById('answer');
let reset = document.querySelector("button");
let randomNum = ~~ (Math.random() * 15);

//function that has a an if statement to compare the guess against the randomly generated number
function guessGame() {
    let userAnswer = document.getElementById('attempt').value;
    let result = ''; //stores the created html element
    //compares userAnswer aganst the randomnumber
    if (userAnswer == randomNum) {
        result = document.createElement('h3');
        result.innerText = "You guessed right!";
        document.querySelector("main form").append(result);

    }else if (userAnswer != randomNum) {
        result = document.createElement('h3');
        result.innerText = `Close the number was ${randomNum}`;
        document.querySelector("main form").append(result);

    } else {
        console.log('ERROR')
    }
    //unhides reset button
    reset.style.display = 'block';
    console.log(userAnswer)
};


//refreshes the page with a button. 
function reloadPage(){
    location.reload();
};


//event handlers
submitButton.addEventListener('click', guessGame, {once : true});
reset.addEventListener('click', reloadPage);

