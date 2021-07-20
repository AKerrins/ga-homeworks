const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const {width: gameWidth, height: gameHeight} = canvas
//filling padddle with the colour white.

context.fillStyle = 'white'

const resolution = 5
const compPaddle = {
    postion:{ x:20, y:10},
    color:'pink',
    width:50,
}

const playerPaddle = { 
    left:{ x:0, y: gameHeight - resolution},
    color:'green',
    width: 20, 
}

//drawing paddles
function drawPaddles() {
//   context.fillStyle = 'white';
//   context.fillRect(10, 10, 200, 50)
//   context.fillRect(playerPaddle.left * 5, 298, 100, 5)
drawRect(compPaddle)
drawRect(playerPaddle)
} 

function drawRectangle({color, width, postion: {x,y}}){
    context.fillStyle = color
    context.fillRect(x, y, resolution * width, resolution)
}

//drawing the ball
function drawCircle({color, position:{ x,y }}) {
    context.beginPath()
    context.arc(x,y,resolution, 0 , 2 * Math.PI)
    context.fillStyle = color
    context.fill()
    context.closePath()
}
const ball = {
    position:{
        x: null,
        y: null,
    },
    angle: null,
    color:'blue',
}
function setBallInitialPosition() {
    ball.postion ={x: gameWidth/4, y:gameWidth/4}
    ball.angle = Math.PI/3
}
function drawBall(){
    drawCircle(ball)
}
// const ballSize = 8
// function drawBall(position) {
// context.fillRect(position.x, position.y, ballSize, ballSize)
//  } 

let steps = 150
let index = 0
function ballPositionForStep(step) {
 if (step > steps) {
     let reverseStep = steps * 2 - step
     return { x: reverseStep + 25, y: reverseStep * 2}
 }
 return {x: step + 25, y: step * 2}
} 

// function nextStep() {
// context.clearRect(0, 8, 300, 290)
// drawPaddles()
// drawBall(ballPositionForStep(index))
// index = (index + 1) % (steps * 2)
// setTimeout(nextStep, 25)
// }

//making user paddle move.
let isMovingLeft = false
let isMovingRight = false

function movePlayerPaddle() {
   if (isMovingLeft) {
    playerPaddle.position.x--
   }

   if (isMovingRight) {
    playerPaddle.position.x++
   }

   if (playerPaddle.position.x > 40) {
    playerPaddle.position.x = gameWidth
   } 

   if(playerPaddle.position.x < 0) {
    playerPaddle.position.x = 0
   } 
}

// function nextStep() {
//     context.clearRect(0, 0, gameWidth, gameHeight)
//     movePlayerPaddle()
//     drawPaddles()
//     drawBall(ballPositionForStep(index))
//     index = (index + 1) % (steps * 2)
//     setTimeout(nextStep, 25)
// }

function moveBall(){
const{ x,y } = ball.position
const newPosition = {
    x:x + Math.cos(ball.angle),
    y:y + Math.sin(ball.angle),
 }
ball.position = newPosition
}
function nextStep(){
    context.clearRect(0,0, gameWidth, gameHeight)
    dectectCollisions()
    movePlayerPaddle()
    drawPaddles()
    moveBall()
    drawBall() 
    index = (index + 1) % (steps * 2)
    setTimeout(nextStep, 25)
}
// nextStep()
// //eventListener for using keys
document.addEventListener('keydown', (event) => {
    if (isLeftKey(event)){
        isMovingLeft = true
    }
    if (isRightKey(event)){
        isMovingRight = true
    }
  })

document.addEventListener('keyup', (event) => {
    if (isLeftKey(event)){
        isMovingLeft = false
    }

    if (isRightKey(event)){
        isMovingRight = false
    }
  }) 
 
function isLeftKey(event) {
    return event.code ==='ArrowLeft'
}

function isRightKey(event) {
    return event.code ==='ArrowRight'
}
// moving ball by bouncing ball off playe paddle, comp paddle and dised
function dectectCollisions(){
    if(ball.position.y > playerPaddle.position.y){
            ball.angle = -ball.angle
    }
    if(ball.position.y < comPaddle.position.y){
        ball.angle = -ball.angle
    }
    if(ball.position.x < 0){
        ball.angle = Math.PI - ball.angle
    }
    if(ball.position.x > gameWidth){
        ball.angle = Math.PI - ball.angle
    }
}
//Code from MDN https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection

//Code from stack overflow
// Paddle Collision Detection
// Start by a global check to see if the ball is behind the paddle's face
// if (this.x <= playerPaddle.x + playerPaddle.width) {
//     // Get the ball's radius
//     let ballRad = this.width/2;
//     let padding = 3;

//     //  Detecting if ball hits front of paddle
//     if (this.x + padding >= playerPaddle.x + playerPaddle.width 
//         && this.y - rad >= playerPaddle.y
//         && this.y + rad <= playerPaddle.y + playerPaddle.height) {
//     console.log("front connect");
//     this.vx = -this.vx;

//    } else if (this.y - this.height >= playerPaddle.y
//     && this.y <= playerPaddle.y
//     && this.x - rad >= playerPaddle.x) {
//     // Get the position of the center of the ball
//        let x = this.x + rad;
//        let y = this.y + rad;
//     } 
//     // Get the position of the corner of the paddle
//     let px = playerPaddle.x + playerPaddle.width;
//     let py = playerPaddle.y;
//     if (this.y + this.height > playerPaddle.y) {
//         // if the ball is below the top edge, use the bottom corner
//         // of the paddle - else use the top corner of the paddle
//         py += playerPaddle.height;
//     } 
//     // Do some trig to determine if the ball surface touched the paddle edge
//         // Calc the distance (C = sqrt(A^2 + B^2))
//         let dist = Math.pow(Math.pow(x - px, 2) + Math.pow(y - py, 2), 0.5);

//         // Check if the distance is within the padding zone
//         if (dist <= rad && dist >= rad - padding) {
//             // Get the angle of contact as Arc-sin of dx/dy
//             var angle = Math.asin(x - px / y - py);

//             // Adjust the velocity accordingly
//             this.vy = (-this.vy * Math.cos(angle)) + (-this.vx * Math.sin(angle));
//             this.vx = (-this.vx * Math.cos(angle)) + (-this.vy * Math.sin(angle));
//         }