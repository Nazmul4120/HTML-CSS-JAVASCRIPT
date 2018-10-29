//1- Ask the user to enter a value, either yes or no
var wantToPlay = prompt("Would you like to get the biggest number of 3 numbers? y(yes) or n(no)? ").toLowerCase();




//2- if no(n) we alert if you want to play again refresh the page

if (wantToPlay === "n" || wantToPlay === "no") {
    alert("If you want to play again, refresh the page");
} else if (wantToPlay === "y" || wantToPlay === "yes") {
    //3- If yes,
    //3-1 We ask for the first number
    var num1 = prompt("Enter the first number");
    //3-2 We ask for the second number
    var num2 = prompt("Enter the second number");
    //3-3 We ask for the third number
    var num3 = prompt("Enter the third number");
    //3-4 calculate the biggest number and alert the result
    var res = num1;
    if (res < num2) {
        res = num2;
    }
    if (res < num3) {
        res = num3;
    }
    
    alert("The biggest number is: " + res);
    
}
