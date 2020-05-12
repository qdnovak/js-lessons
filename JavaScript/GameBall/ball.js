var canvas = document.getElementById("mycanvas"); // получаю класс канваса
var ctx = canvas.getContext("2d"); //Получаю контекст 2Д

//
var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

// sozday paddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var paddleDx = 7;
var rightPaddle;
var leftPaddle;

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPaddle = true;
  }
  if (e.keyCode == 37) {
    leftPaddle = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPaddle = false;
  }
  if (e.keyCode == 37) {
    leftPaddle = false;
  }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2); // создаю мяч
  ctx.fillStyle = "blue"; // Задаю ему цвет
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight); // создаю паннель
  ctx.fillStyle = "red"; // Задаю ему цвет
  ctx.fill();
  ctx.closePath();
}

// Функция прорисовки
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // очищаю екрак каждый фрейм
  drawBall();
  drawPaddle();
  if (
    y + dy < ballRadius ||
    (y + dy > canvas.height - paddleHeight - ballRadius &&
      x + dx > paddleX &&
      x + dx < paddleX + paddleWidth)
  ) {
    dy = -dy;
  } else if (y + dy > canvas.height) {
    location.reload();
  }

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    console.log(dx + " ЄТО  Х");
  }
  if (y + dy < ballRadius) {
    dy = -dy;
    console.log(dy + " ЄТО  Y");
  }
  if (rightPaddle && paddleX + paddleWidth < canvas.width) {
    paddleX += paddleDx;
  } else if (leftPaddle && paddleX > 0) {
    paddleX -= paddleDx;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw); // метод обновление Єкрана
}
requestAnimationFrame(draw); //вызываю функцию Драв для обновления экрана (метод постоянно вызывает сам себя )
