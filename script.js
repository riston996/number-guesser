let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// function generateTarget
function generateTarget() {
    var b = Math.ceil(Math.random()*9);
    return b;
}

//console.log(generateTarget());

// function compareGuesses

function getAbsoluteDistance(num1,num2) {

    var ba = num1 - num2;
    if (ba <0) {
        ba = ba * -1 ;
    } else {
        ba = ba * 1;
    }

    return ba;

}

function compareGuesses(hguess,cguess,tnumber ) {

    
    var ca = getAbsoluteDistance(hguess,tnumber);
    var da = getAbsoluteDistance(cguess,tnumber);

    console.log(`The difference between between user - target is ${ca}`);
    console.log(`The difference between between computer - target is ${da}`);

    if (ca < da) {
        return true;
    } else if (ca == da) {
        return true;
    } else {
        return false;
    } 

}

function updateScore(string) {
    if (string == "human") {
        humanScore = humanScore + 1;
    } else {
        computerScore = computerScore + 1;
    }
}

function advanceRound() {
    currentRoundNumber = currentRoundNumber + 1;
}

function reversal(str) {
    currentRoundNumber = currentRoundNumber -1 ;
    if (str == 'human')
    {
        humanScore = humanScore - 1;
        return true;
    } else {
        computerScore = computerScore - 1;
        return true;
    }

}

