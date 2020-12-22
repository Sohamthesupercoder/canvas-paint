var canvas= document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseevent= "empty";
var CPOX;
var CPOY;

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="mouseLeave";
}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
var CPOX=e.clientX-canvas.offsetLeft;
var CPOY=e.clientY-canvas.offsetTop;
if (mouseevent=="mouseDown") {
    var color= document.getElementById("color").value;
var linewidth= document.getElementById("width").value;
var radius= document.getElementById("Radius").value;
    console.log("current coordinates of x and y");
    console.log("X=" + CPOX + "Y=" + CPOY);
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=linewidth;
ctx.arc(CPOX,CPOY,radius,0,2 * Math.PI);
ctx.stroke();
}

}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}