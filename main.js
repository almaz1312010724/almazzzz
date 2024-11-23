const square = document.getElementById("square")
let position = 0

function move(){
    position +=2
    square.style.left = position + "px"
if (position < window.innerWidth - 50){
    requestAnimationFrame(move)
}
}
// move()

let colors = ['#ff5733', "#33ff57","red","blue"]
let index = 0
function change(){
    
}