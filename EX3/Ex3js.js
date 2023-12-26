var reverse = 0;
var number = prompt("Please enter number \n", "");
var origin = number;
do{
var mod = number%10;
reverse = reverse*10+mod;
number = parseInt(number/10);
}while(number != 0);
if(reverse == origin){
alert("yes");
}else if(reverse != origin){
alert("no");
}
