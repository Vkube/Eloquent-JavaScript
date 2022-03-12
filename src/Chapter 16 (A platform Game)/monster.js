'use strict';


// It is traditional for platform games to have enemies that you can jump on top of to defeat. This exercise asks you to add such an actor type to the game.

// We’ll call it a monster. Monsters move only horizontally. You can make them move in the direction of the player, bounce back and forth like horizontal lava, or have any movement pattern you want. The class doesn’t have to handle falling, but it should make sure the monster doesn’t walk through walls.

// When a monster touches the player, the effect depends on whether the player is jumping on top of them or not. You can approximate this by checking whether the player’s bottom is near the monster’s top. If this is the case, the monster disappears. If not, the game is lost.

/*
 <link rel="stylesheet" href="css/game.css">
<style>.monster { background: purple }</style>

<body>
  <script>
    // Complete the constructor, update, and collide methods
    class Monster {
    //   constructor(pos, /* ... */) {}

//       get type() { return "monster"; }

//       static create(pos) {
//         return new Monster(pos.plus(new Vec(0, -1)));
//       }

//       update(time, state) {}

//       collide(state) {}
//     }

//     Monster.prototype.size = new Vec(1.2, 2);

//     levelChars["M"] = Monster;

//     runLevel(new Level(`
// ..................................
// .################################.
// .#..............................#.
// .#..............................#.
// .#..............................#.
// .#...........................o..#.
// .#..@...........................#.
// .##########..............########.
// ..........#..o..o..o..o..#........
// ..........#...........M..#........
// ..........################........
// ..................................
// `), DOMDisplay);
//   </script>
// </body> 




