function draw() {
var dom = document.getElementById("container");
var count = 0;
do{
var addOne = document.createElement("div");
dom.appendChild(addOne);
var x = Math.random()*400;
var y = Math.random()*400;
var color = Math.round(Math.random()*5);
if(color == 0){
addOne.style.top =10+ y + "px";
addOne.style.left =10+ x + "px";
addOne.style.border ="thin  solid  black";
addOne.style.width = 50 + "px";
addOne.style.height = 50 + "px";
addOne.style.position = "Absolute";
addOne.style.backgroundColor = "orange";
}else if(color == 1){
addOne.style.top =10+ y + "px";
addOne.style.left =10+ x + "px";
addOne.style.border ="thin  solid  black";
addOne.style.width = 50 + "px";
addOne.style.height = 50 + "px";
addOne.style.position = "Absolute";
addOne.style.backgroundColor = "red";
}else if(color == 2){
addOne.style.top =10+ y + "px";
addOne.style.left =10+ x + "px";
addOne.style.border ="thin  solid  black";
addOne.style.width = 50 + "px";
addOne.style.height = 50 + "px";
addOne.style.position = "Absolute";
addOne.style.backgroundColor = "blue";
}else if(color ==3){
addOne.style.top =10+ y + "px";
addOne.style.left =10+ x + "px";
addOne.style.border ="thin  solid  black";
addOne.style.width = 50 + "px";
addOne.style.height = 50 + "px";
addOne.style.position = "Absolute";
addOne.style.backgroundColor = "yellow";
}else if(color == 4){
addOne.style.top =10+ y + "px";
addOne.style.left =10+ x + "px";
addOne.style.border ="thin  solid  black";
addOne.style.width = 50 + "px";
addOne.style.height = 50 + "px";
addOne.style.position = "Absolute";
addOne.style.backgroundColor = "grey";
}else if(color == 5){
addOne.style.top =10+ y + "px";
addOne.style.left =10+ x + "px";
addOne.style.border ="thin  solid  black";
addOne.style.width = 50 + "px";
addOne.style.height = 50 + "px";
addOne.style.position = "Absolute";
addOne.style.backgroundColor = "green";
}
count = count + 1;
addOne.setAttribute('onmouseover', "removeIt(this)");
}while(count < 100);
}

function repeat(){
draw();
}

repeat();

function removeIt(obj){
var count = document.getElementById("container").childElementCount;
if(count == 14){
alert("Last One Child!")
obj.remove();
}else if(count > 14){
obj.remove();
}

}

