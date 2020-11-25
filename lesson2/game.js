function game() {
    while(1)
    {
        let randNumber = parseInt(Math.random()*100);
        userGuess(randNumber);
    }
}

function userGuess(answer, userAnswer=NaN) {
    
    if (userAnswer == answer) {
        alert("Правильно!");
        return;
    }
    else if (userAnswer){
        if (userAnswer > answer) 
            alert("Ваше число больше загаданного!");
        else
            alert("Ваше число меньше загаданного!");
    }
    
    userGuess(answer, +prompt("Введите число от 0 до 100: "));
}

game();