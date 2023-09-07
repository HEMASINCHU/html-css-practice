document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("game-board");
  const scoreDisplay = document.getElementById("score");
  const cellSize = 20;
  const numRows = 20;
  const numCols = 20;

  let snake = [{ x: 10, y: 10 }];
  let food = { x: 5, y: 5 };
  let direction = "right";
  let score = 0;

  function randomPosition() {
    return {
      x: Math.floor(Math.random() * numCols),
      y: Math.floor(Math.random() * numRows),
    };
  }

  function updateGameBoard() {
    gameBoard.innerHTML = "";

    const foodCell = document.createElement("div");
    foodCell.className = "cell food";
    foodCell.style.gridRow = food.y;
    foodCell.style.gridColumn = food.x;
    gameBoard.appendChild(foodCell);

    snake.forEach((segment) => {
      const snakeCell = document.createElement("div");
      snakeCell.className = "cell snake";
      snakeCell.style.gridRow = segment.y;
      snakeCell.style.gridColumn = segment.x;
      gameBoard.appendChild(snakeCell);
    });
  }

  function moveSnake() {
    const head = { ...snake[0] };

    switch (direction) {
      case "up":
        head.y--;
        break;
      case "down":
        head.y++;
        break;
      case "left":
        head.x--;
        break;
      case "right":
        head.x++;
        break;
    }

    if (head.x === food.x && head.y === food.y) {
      snake.unshift(food);
      score += 10;
      scoreDisplay.textContent = "Score: " + score;
      food = randomPosition();
    } else {
      snake.pop();
    }

    snake.unshift(head);
  }

  function checkCollision() {
    const head = snake[0];

    if (
      head.x < 0 ||
      head.x >= numCols ||
      head.y < 0 ||
      head.y >= numRows ||
      snake
        .slice(1)
        .some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      clearInterval(gameInterval);
      alert("Game Over! Your Score: " + score);
    }
  }

  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        if (direction !== "down") {
          direction = "up";
        }
        break;
      case "ArrowDown":
        if (direction !== "up") {
          direction = "down";
        }
        break;
      case "ArrowLeft":
        if (direction !== "right") {
          direction = "left";
        }
        break;
      case "ArrowRight":
        if (direction !== "left") {
          direction = "right";
        }
        break;
    }
  });

  const gameInterval = setInterval(() => {
    moveSnake();
    checkCollision();
    updateGameBoard();
  }, 200);

  updateGameBoard();
});
