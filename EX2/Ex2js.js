var array = []
do{
var number = prompt("Please enter number \n", "");
array.push(number);
}while(array[array.length - 1] != 0);
document.getElementById("Result").value = array;
