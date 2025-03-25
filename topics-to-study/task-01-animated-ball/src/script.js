"use strict";

const ball = document.getElementById("ball");
let isFalling = false;
let velocityY = 7;
let velocityX = 2;
const gravity = 0.1;
const bounceFactor = 0.5;
const ground = window.innerHeight * 0.5 - ball.offsetHeight;

ball.addEventListener("click", () => {
  if (!isFalling) {
    isFalling = true;
    dropBall();
  }
});

const dropBall = () => {
  let positionY = parseFloat(ball.style.transform.replace("translateY(", "").replace("px)", "")) || 0;
  let positionX = parseFloat(ball.style.left) || 10;

  const fall = () => {
    velocityY += gravity;
    positionY += velocityY;
    positionX += velocityX;

    if (positionY >= ground) {
      positionY = ground;
      velocityY = -velocityY * bounceFactor;
      velocityX *= bounceFactor;
    }

    if (positionX < 0) {
      positionX = 0;
    }

    if (positionX > window.innerWidth - ball.offsetWidth) {
      positionX = window.innerWidth - ball.offsetWidth;
    }

    ball.style.transform = `translateY(${positionY}px)`;
    ball.style.left = positionX + "px";

    if (Math.abs(velocityY) > 0.1 || positionY > 0) {
      requestAnimationFrame(fall);
    } else {
      isFalling = false;
    }
  };

  requestAnimationFrame(fall);
};
