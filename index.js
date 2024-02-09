let num1 = Math.random() * 5;
num1 = Math.round(num1)
num1 = num1 + 1;

let num2 = Math.random() * 5;
num2 = Math.round(num2)
num2 = num2 + 1;

console.log(num1,num2)

// num1 = player, num2 = pc ---------

function Roll(){
    document.querySelector(".dice1").innerHTML = num1;
    document.querySelector(".dice2").innerHTML = num2;
    if(num1> num2){
        document.querySelector("#result").innerHTML = "You won!!!"
    }else if(num1< num2){
        document.querySelector("#result").innerHTML = "PC won!!! you lose, try again."
    }else{
        document.querySelector("#result").innerHTML = "Its a Tie, play again. "
    }
}











