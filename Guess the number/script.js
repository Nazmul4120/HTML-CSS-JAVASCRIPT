//1- How to generate a random number
var randomNumber = Math.ceil(Math.random() * 5);

//2- Ask the user to guess that number
var GuessNumber = prompt('Guess the random number! (Between 1-5)');


//3- We check if the user chose the correct value 
if(randomNumber == GuessNumber){
    //4- we alert the correct messages
    alert("You won!");
}else{
    //4- we alert the correct messages
    alert("You loosed!")
}

