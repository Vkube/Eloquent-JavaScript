"use strict";
// Use the requestAnimationFrame technique that we saw in Chapter 14 and Chapter 16 to draw a box with a bouncing ball in it. The ball moves at a constant speed and bounces off the box’s sides when it hits them.

// <!doctype html>
// <script src="code/chapter/16_game.js"></script>
// <script src="code/levels.js"></script>
// <script src="code/chapter/17_canvas.js"></script>

// <canvas width="400" height="400"></canvas>
// <script>
//   let cx = document.querySelector("canvas").getContext("2d");

//   let lastTime = null;
//   function frame(time) {
//     if (lastTime != null) {
//       updateAnimation(Math.min(100, time - lastTime) / 1000);
//     }
//     lastTime = time;
//     requestAnimationFrame(frame);
//   }
//   requestAnimationFrame(frame);

//   function updateAnimation(step) {
//     // Your code here.
//   }
// </script>
