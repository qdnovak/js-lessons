const FPS = 30; // frames per second
const shipSize = 30; // Rship Size
const TURN_speed = 360;

const ship_thrust = 5; // dvigenie shipa
//Єлементы Канваса
var canv = document.getElementById("gameCanvas");
var context = canv.getContext("2d");

var ship = {
  x: canv.clientWidth / 2,
  y: canv.clientHeight / 2,
  r: shipSize / 2,
  a: (90 / 180) * Math.PI, // convert to radius
  rot: 0,
  thrusting: false,
  thrust: {
    x: 0,
    y: 0,
  },
};

// EventListener handler
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
//Устанавливаю  интервал обновления
setInterval(update, 1000 / FPS);

function keyDown(ev) {
  switch (ev.keyCode) {
    case 37: // left rotate
      ship.rot = ((TURN_speed / 180) * Math.PI) / FPS;
      break;
    case 38: // up rottate
      ship.thrusting = true;
      break;
    case 39: // rigth rotate
      ship.rot = ((-TURN_speed / 180) * Math.PI) / FPS;
      break;
  }
}
function keyUp(ev) {
  switch (ev.keyCode) {
    case 37: // stop rotate left
      ship.rot = 0;
      break;
    case 38: // stop up rottate
      ship.thrusting = false;
      break;
    case 39: // stop rigth rotate
      ship.rot = 0;
      break;
  }
}

function update() {
  //прорисовуем космос
  context.fillStyle = "black";
  context.fillRect(0, 0, canv.clientWidth, canv.clientHeight);
  // thrust the ship
  if (ship.thrusting) {
    ship.thrust.x += (ship_thrust * Math.cos(ship.a)) / FPS;
    ship.thrust.y -= (ship_thrust * Math.sin(ship.a)) / FPS;
  }

  //прорисовуем корабль
  context.strokeStyle = "white";
  context.lineWidth = shipSize / 20;
  context.beginPath();
  context.moveTo(
    // nose of the ship
    ship.x + (4 / 3) * ship.r * Math.cos(ship.a),
    ship.y - (4 / 3) * ship.r * Math.sin(ship.a)
  );
  context.lineTo(
    // rea left
    ship.x - ship.r * ((2 / 3) * Math.cos(ship.a) + Math.sin(ship.a)),
    ship.y + ship.r * ((2 / 3) * Math.sin(ship.a) - Math.cos(ship.a))
  );
  context.lineTo(
    // rea right
    ship.x - ship.r * ((2 / 3) * Math.cos(ship.a) - Math.sin(ship.a)),
    ship.y + ship.r * ((2 / 3) * Math.sin(ship.a) + Math.cos(ship.a))
  );
  context.closePath();
  context.stroke();
  //обновляем корабль
  ship.a += ship.rot;
  // движение корабля
  ship.x += ship.thrust.x;
  ship.y += ship.thrust.y;
  // centre dot
  context.fillStyle = "red";
  context.fillRect(ship.x - 1, ship.y - 1, 2, 2);
  console.log(ship.thrusting);
}
console.log("Hello " + canv.clientWidth);
