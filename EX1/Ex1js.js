function translator(){
var score = document.getElementById("Score").value;
if(score >= 90 && score< 100 ){
document.getElementById("Grade").value = grade = "A+"
}else if(score >= 80 && score< 90){
document.getElementById("Grade").value = grade = "A"
}else if(score >= 75 && score< 80){
document.getElementById("Grade").value = grade = "B+"
}else if(score >= 70 && score< 75){
document.getElementById("Grade").value = grade = "B"
}else if(score >= 65 && score< 70){
document.getElementById("Grade").value = grade = "C+"
}else if(score >= 60 && score< 65){
document.getElementById("Grade").value = grade = "C"
}else if(score >= 55 && score< 59){
document.getElementById("Grade").value = grade = "D+"
}else if(score >= 50 && score< 55){
document.getElementById("Grade").value = grade = "D"
}else if(score >= 40 && score< 50){
document.getElementById("Grade").value = grade = "E"
}else if(score < 40){
document.getElementById("Grade").value = grade = "F"
}else if(score < 0 && score > 100){
document.getElementById("Grade").value = grade = "NULL"
alert("Input number error!");
}else if(typeof(socre) !=  'number'){
document.getElementById("Grade").value = grade = "NULL"
alert("Input type error!");
}
}