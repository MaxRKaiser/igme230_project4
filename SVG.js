function grow() {
    alert('Grow and shrink a circle on a click');
    }
    
function budding() {
    alert('Move around and bud off copies');
    }
    
function cluster() {
    alert('randomly generate moving objects');
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

function MousePos(e) {
    var circle2 = document.getElementById("circle2");
    var cx = circle2.getAttribute("cx");
    var cy = circle2.getAttribute("cy");
    var newX = MouseEvent.clientX;
    var newY = MouseEvent.clientY;
    circle2.setAttribute("cx", newX);
    circle2.setAttribute("cy", newY);
}

document.addEventListener("click", MousePos);