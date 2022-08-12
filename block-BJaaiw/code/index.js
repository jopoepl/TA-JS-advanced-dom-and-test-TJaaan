// const canvas = document.querySelector(`canvas`);
// const c = canvas.getContext(`2d`);

// // c.beginPath();
// // c.rect(x,y,50,50)
// // c.fillStyle = "#FF0000";
// // c.fill();
// // c.closePath;

// const radius = 20;

// let x = Math.random() * canvas.width +  radius;
// let y = Math.random() * canvas.height + radius;
// let dx = 2;
// let dy = 2;
// let rightPressed = false;
// let leftPressed = false;


// const brickRowCount = 3;
// const brickColumnCount = 5;
// const brickWidth = 75;
// const brickHeight = 20;
// const brickPadding = 10;
// const brickOffsetTop = 30;
// const brickOffsetLeft = 30;


// const bricks = [];
// for (let c = 0; c < brickColumnCount; c++) {
//   bricks[c] = [];
//   for (let r = 0; r < brickRowCount; r++) {
//     bricks[c][r] = { x: 0, y: 0 };
//   }
// }




// function drawBricks() {
//     for (let b = 0; b < brickColumnCount; b++) {
//       for (let r = 0; r < brickRowCount; r++) {
//         if (bricks[b][r].status === 1) {
//             console.log("drawbricks")
//           const brickX = b * (brickWidth + brickPadding) + brickOffsetLeft;
//           const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
//           bricks[b][r].x = brickX;
//           bricks[b][r].y = brickY;
//           c.beginPath();
//           c.rect(brickX, brickY, brickWidth, brickHeight);
//           c.fillStyle = "#0095DD";
//           c.fill();
//           c.closePath();
//         }
//       }
//     }
//   }
  

// function drawBall(){
//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI*2, false)
//     c.fillStyle = "blue";
//     c.fill();
//     c.closePath();
// }

// const paddleHeight = 10;
// const paddleWidth = 50;
// let paddleX = (canvas.width - paddleWidth)/2


// function keyDownHandler(e){
//     if (e.key === "Right" || e.key === "ArrowRight") {
//         rightPressed = true;
//       } else if (e.key === "Left" || e.key === "ArrowLeft") {
//         leftPressed = true;
//       }

// }
// function keyUpHandler(e){
//     if (e.key === "Right" || e.key === "ArrowRight") {
//         rightPressed = false;
//       } else if (e.key === "Left" || e.key === "ArrowLeft") {
//         leftPressed = false;
//       }

// }

// document.addEventListener("keydown", keyDownHandler, false)
// document.addEventListener("keyup", keyUpHandler, false)


// function drawPaddle() {
//     c.beginPath();
//     c.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
//     c.fillStyle = "green";
//     c.fill();
//     c.closePath();
// }

// function collisionDetection() {
//     for (let b = 0; b < brickColumnCount; b++) {
//       for (let r = 0; r < brickRowCount; r++) {
//         const d = bricks[b][r];
//         if (d.status === 1) {
//           if (x > d.x && x < d.x + brickWidth && y > d.y && y < d.y + brickHeight) {
//             dy = -dy;
//             d.status = 0;
//           }
//         }
//       }
//     }
//   }

// function animate(){
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, canvas.width, canvas.height);
//     drawBricks();
//     drawBall();
//     x += dx;
//     y += dy;
//     drawPaddle();
//     // collisionDetection()
//     if (x + dx > canvas.width - radius|| x + dx < radius) {
//         dx = -dx;
//       }
//     if (y + dy < radius) {
//         dy = -dy;
//     }  else if (y + dy > canvas.height-radius) {
//         if (x > paddleX && x < paddleX + paddleWidth) {
//           dy = -dy;
//         } else {
//         document.location.reload();
//         cancelAnimationFrame(animate);
//         alert("GAME OVER");
//       }
//     }

//     if (rightPressed) {
//         paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
//       } else if (leftPressed) {
//         paddleX = Math.max(paddleX - 7, 0);
//       }
// }



// animate();

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            if (y = y - paddleHeight) {
                dy = -dy;
            }
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}

var interval = setInterval(draw, 10);