// import Levels from "./level";
class Player {
  constructor(type) {
    this.type = type;
    this.playerUnits = [];
  }

  assignUnits(units) {
    this.playerUnits.concat(units);
  }
}

export default Player;
