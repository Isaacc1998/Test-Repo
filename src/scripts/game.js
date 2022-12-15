import Board from "./board";
import Levels from "./levels";
import Player from "./player";
import Rifleman from "./rifleman";
import Sniper from "./sniper";
import AtGunner from "./atGunner";
import Unit from "./unit";

class Game {
  constructor(stage) {
    this.board;
    this.stage = stage;
    if (this.stage === 1) {
      let player = new Player("user");
      let units = [
        new Rifleman("Bob", player),
        new Rifleman("Joe", player),
        new Sniper("Lex", player),
        new AtGunner("Steve", player),
      ];
      let enemies = [
        new Rifleman("Ben"),
        new Rifleman("Ryan"),
        new Sniper("Dakota"),
        new AtGunner("Gunther"),
      ];
      this.board = new Board(BATTLEFIELDS.levelOne, units, enemies, player);
      //this.board.render();
      this.runGame(this.board);
    } else if (this.stage === 2) {
    }
  }

  // loadTitleScreen() {}

  runGame(board) {
    let context = board.battlefield;
    function animate() {
      window.requestAnimationFrame(animate);
      board.render();
    }
    animate();
  }
}

export default Game;
