import Unit from "./unit";

class Sniper extends Unit {
  constructor(name, owner = null) {
    super("sniper", 10, 5, 0, 5, 3);
    this.name = name;
    this.owner = owner;
  }
}

export default Sniper;
