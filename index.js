//            alert("fuck");
var gameLevel = [];
var gameStart = false;
var counter;

function generateNumber() {
    var number = Math.floor((Math.random() * 4) + 1);
    var buttonChoosen;
    switch(number) {
        case 1: 
        buttonChoosen = "top-left";
        break;

        case 2: 
        buttonChoosen = "top-right";
        break;

        case 3: 
        buttonChoosen = "bottom-left";
        break;

        case 4: 
        buttonChoosen = "bottom-right";
        break;

    }
    return buttonChoosen;
}

function animateButton(button) {
    $("." + button).fadeOut(100).fadeIn(100);
}

function makeSound(button) {
    var audio = new Audio("sound/" + button + ".mp3");
    audio.play();
}

$(document).keypress(function(){
    if(!gameStart) {
        gameStart = true;
        starGame();
    }    
});

function starGame() {
 
    var buttonChoosen = generateNumber();
    gameLevel.push(buttonChoosen);
    $("h1").text("Level " + gameLevel.length);
    counter = 0;
    animateButton(buttonChoosen);
    makeSound(buttonChoosen);

}

$(".top-left").click(function() {

    var buttonChoosen = "top-left";
    animateButton(buttonChoosen);
    makeSound(buttonChoosen);

     if(gameLevel[counter] == "top-left"){
        check();
    } else {
        gameOver();
    }
});

$(".top-right").click(function() {

    var buttonChoosen = "top-right";
    animateButton(buttonChoosen);
    makeSound(buttonChoosen);

    if(gameLevel[counter] == "top-right"){
        check();
    } else {
        gameOver();
    }
});

$(".bottom-left").click(function() {

    var buttonChoosen = "bottom-left";
    animateButton(buttonChoosen);
    makeSound(buttonChoosen);

    if(gameLevel[counter] == "bottom-left"){
         check();
    } else {
        gameOver();
    }
});

$(".bottom-right").click(function() {

    var buttonChoosen = "bottom-right";
    animateButton(buttonChoosen);
    makeSound(buttonChoosen);

    if(gameLevel[counter] == "bottom-right"){
        check();
    } else {
        gameOver();
    }
});

function check() {

    if((counter + 1) == gameLevel.length) {
        counter = 0;
        setTimeout(starGame, 1000); 
    } else {
        counter++;
    }
}

function gameOver(){

    $("h1").text("Game Over, Press Any Key to Restart");
    makeSound("game-over");
    gameStart = false;
    gameLevel = [];
}

