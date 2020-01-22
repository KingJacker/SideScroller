
// INITIALISING CANVAS
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// CLASS FOR CREATING BALLS THAT ROTATE
class Ball {
    constructor(x, y, color, ballRadius) {
        this.x = x;
        this.y = y;
        this.v = 3;
        this.color = color;
        this.ballRadius = ballRadius;
        this.xDelta = 0;
        this.yDelta = 0;
    }

    // DRAWS BALL ONTO CANVAS
    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }


    jump() {
        this.yDelta = this.y * space * this.v;
    }

    motion(){
           this.y = this.y - this.yDelta;
    }

}



// CREATING BALL OBJECTS
var Ball0 = new Ball(400, 400, "#eee", 12); 
var space = 0;
document.body.addEventListener("keydown", function(event) {
    if (event.keyCode == 32) {
        space = 1;
    } else {
        space = 0;
    }
})

var t = 0;
function draw() {
    t++

    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    
    Ball0.motion();

    // DRAWS ALL THE BALLS
    Ball0.drawBall();
    console.log([Ball0.x, Ball0.y])
}

setInterval(function() {draw();},1);


console.log("Js Loaded");
