//the biggest number play with javascript code

var date = new Date();
var today=date.getDate();
var res;
switch(today){
    case 0:
        res="Starday";
        break;
        
      case 1:
        res="Sunday";
        break;
        
        case 2:
        res="Monday";
        break;
        
        case 3:
        res="Tuesday";
        break;
        
        case 4:
        res="Wednesday";
        break;
        
        case 5:
        res="Thusdayday";
        break;
        
        case 6:
        res="Friday";
        break; 
}

var userInput=prompt("What day is today?");
console.log(userInput).toLowerCase();

if(userInput===today){
    alert("you won");  
}else{
    alert("you loosed");
}