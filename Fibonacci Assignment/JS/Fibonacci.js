var firstNum = 0;
var secNum = 1;
var fiboX = 0;
function returnFibonacci() {
    var x = document.getElementById("num").value;
    if (x < 2) { fiboX = x }
    else {
        for (let i = 1; i < x; i++) {
            fiboX = firstNum + secNum;
            firstNum = secNum;
            secNum = fiboX;
        }
    }
var y = fiboX;
document.getElementById("y").innerHTML = y;
fibox= firstNum = 0;
secNum = 1;
    }