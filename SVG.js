function grow() {
    alert('Grow and shrink a circle on a click!');
    }
    
function budding() {
    alert('Have the circle chase your mouse!');
    }
    
function cluster() {
    alert('Control the spin of a shape!');
    }

var timerFunction = null;

function startGrow() {
    if(timerFunction == null) {
        timerFunction = setInterval(animate, 100);
    }
}

function startShrink() {
    if(timerFunction == null){
        timerFunction = setInterval(animate1, 100)
    }
}

function animate() {
    var circle = document.getElementById("circle1");
    var r = circle.getAttribute("r");
    var newR = 5 + parseInt(r);
    if(newR >= 150) {
        clearInterval(timerFunction);
        timerFunction = null;
    }
    circle.setAttribute("r", newR);
}

function animate1() {
    var circle = document.getElementById("circle1");
    var r = circle.getAttribute("r");
    var newR = parseInt(r) - 5;
    if(newR <= 10) {
        clearInterval(timerFunction);
        timerFunction = null;
    }
    circle.setAttribute("r", newR);
}

function RotateLeft() {
    
document.getElementById("rectangle1").classList.add("rotateLeft");
document.getElementById("rectangle1").classList.remove("rotateRight");
 
}

function RotateRight() {
    
document.getElementById("rectangle1").classList.add("rotateRight");
 
}

function stopRotate() {
    
document.getElementById("rectangle1").classList.remove("rotateLeft");
document.getElementById("rectangle1").classList.remove("rotateRight");
 
}

var selectedElement = 0;
var currentX = 0;
var currentY = 0;

function moveElement(evt) {
    selectedElement = document.getElementById("circle2");
    currentX = evt.clientX - 100;
    currentY = evt.clientY - 100;
    
    selectedElement.setAttribute("cx", currentX); 
    selectedElement.setAttribute("cy", currentY); 
}