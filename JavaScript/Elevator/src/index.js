class InputHandler {
  constructor(Paddle) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          Paddle.moveleft();
        case 39:
          alert("move right");
          break;
      }
    });
  }
}

//...................................................................................................................................................................................
//Создаю отдельно класс отвечающий за прорисовку нижней платформы
class Paddle {
  // Создание класса
  constructor(gameWidth, gameHeight) {
    //Конструктор который принимает высоту и ширину канваса (2 параметра)
    this.width = 150; // задаю ширину платформе
    this.height = 30; // задаю длнну платформе

    this.position = {
      // создаю Обьект с параметрами позиции платформы в канвасе
      x: gameWidth / 2 - this.width / 2, // Длинну канваса делю на 2 и отнемаю длинну платформы тоже деленную на 2 (чтоб была по центру по х кординате )
      y: gameHeight - this.height - 10 // по кординате У будет прижата к низу и - 10 пикселей растояние от низа к платформе
    };
  }
  moveleft() {}

  draw(ctx) {
    // создаю функцию прорисовки
    ctx.fillStyle = "#0ff"; // Задаю цвет платформе
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Риссую саму платформу которая принимает параметры (Позиция по Х, позиция по У. ширина , длинна)
  }
  update(deltatime) {
    if (!deltatime) return;
  }
}

//...................................................................................................................................................................................
new InputHandler();

let canvas = document.getElementById("gameScreen"); //Получаю класс Канваса

let ctx = canvas.getContext("2d"); // Получаю Контекст 2Д

const GAME_WIDTH = 800; //Задаю ширину канвасу (такуюже как и в html)
const GAME_HEIGHT = 600; //Задаю высоту канвасу (такуюже как и в html)

let paddlePos = new Paddle(GAME_WIDTH, GAME_HEIGHT); // создаю переменну (Обьект) с класса моей панели (Paddle) который принимает высоту и ширину канваса

paddlePos.draw(ctx); // вызываю метод прорисовки (draw) из класса paddle и ложу туда ctx (ctx = canvas.getContext("2d");) он прорисовует платформу на єкран

let lastTime = 0;

function gameloop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 800, 600); //очишать єкран каждый фрейм
  paddlePos.update(deltaTime);
  paddlePos.draw(ctx);

  requestAnimationFrame(gameloop);
}

gameloop();
