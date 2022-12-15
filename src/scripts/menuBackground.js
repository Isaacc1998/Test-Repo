import Grass from "../../assets/grass.png";
import Dirt from "../../assets/dirt.png";
import Water from "../../assets/water.png";
import Crate from "../../assets/crate1.png";
import Rifleman from "../../assets/rifle.png";
import Grenade from "../../assets/grenade.png";
import Sniper from "../../assets/sniper.png";

class Background {
  constructor(grid) {
    this.grid = grid;
    this.background = this.drawBackground();
    this.tiles = [];
    this.unitImages = [];

    this.generateUnitImages();
    this.fillTiles();
  }

  // run() {
  //   let that = this;
  //   function animate() {
  //     window.requestAnimationFrame(animate);
  //     that.loadBackground();
  //   }
  //   animate();
  // }

  loadBackground() {
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[row].length; col++) {
        const val = this.grid[row][col];
        let image;
        let sx = 0;
        let sy = 0;
        if (val === 0) {
          image = this.tiles[0];
          sx = 144;
          sy = 144;
        } else if (val === 1) {
          image = this.tiles[1];
          sx = 144;
          sy = 144;
        } else if (val === 2) {
          image = this.tiles[2];
          sx = 144;
          sy = 144;
        } else if (val === 3) {
          image = this.tiles[3];
          sx = 1;
          sy = 0;
        }

        this.background.drawImage(
          image,
          sx,
          sy,
          30,
          30,
          col * 69,
          row * 69,
          69,
          69
        );
      }
    }
  }

  drawBackground() {
    this.canvas = document.getElementById("menu-background");
    this.context = this.canvas.getContext("2d");

    // this.canvas.style.display = "inline-block";
    // this.canvas.style.position = "relative";
    // this.canvas.style.right = "190";
    // this.canvas.style.bottom = "686";

    // document.body.appendChild(this.canvas);
    // let container = document.getElementById("container");
    // container.appendChild(this.canvas);

    return this.context;
  }

  generateUnitImages() {
    let rifleman = new Image();
    rifleman.src = Rifleman;
    this.unitImages.push(rifleman);

    let sniper = new Image();
    sniper.src = Sniper;
    this.unitImages.push(sniper);

    let launcher = new Image();
    launcher.src = Grenade;
    this.unitImages.push(launcher);
  }

  fillTiles() {
    let grass = new Image();
    grass.src = Grass;
    this.tiles.push(grass);

    let dirt = new Image();
    dirt.src = Dirt;
    this.tiles.push(dirt);

    let water = new Image();
    water.src = Water;
    this.tiles.push(water);

    let crate = new Image();
    crate.src = Crate;
    this.tiles.push(crate);
  }
}

export default Background;
