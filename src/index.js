import Game from "./scripts/game";
import Board from "./scripts/board";
import Background from "./scripts/menuBackground";
import Levels from "./scripts/levels";

document.addEventListener("DOMContentLoaded", (e) => {
  // let stage;
  let newGame;

  document.getElementById("return").addEventListener("click", () => {
    document.getElementById("name").textContent = "Bob";
    document.getElementById("tCount").textContent = 1;
    document.getElementById("victory").style.display = "none";
    document.getElementById("view").style.display = "none";

    document.getElementById("stage-select").style.display = "none";
    document.getElementById("start-game").style.display = "block";
    document.getElementById("title-screen").style.display = "";
  });

  document.getElementById("confirm-move").addEventListener("click", () => {
    newGame.board.savePositions();
    // newGame.board.generateHTMLunits();
    document.removeEventListener("keydown", newGame.board.moveUnit);
    let counter = document.getElementById("moveCounter");
    counter.style.display = "none";
    let moveOptions = document.getElementsByClassName("moveB");
    for (let i = 0; i < moveOptions.length; i++) {
      moveOptions[i].style.display = "block";
    }
    move.style.display = "none";
    document.getElementById("moveText").style.display = "none";
  });

  document.getElementById("cancel-move").addEventListener("click", () => {
    let currentPos = newGame.board.unitTurn.pos;
    let startingPos = newGame.board.startingPos;
    newGame.board.updateGrid(currentPos[0], currentPos[1], 0);
    newGame.board.updateGrid(
      startingPos[0],
      startingPos[1],
      newGame.board.unitTurn
    );
    newGame.board.unitTurn.pos = startingPos;
    console.log(newGame.board.unitTurn.pos, "reset unit position");
    newGame.board.setCurrentMoveCount();
    let name = newGame.board.unitTurn.name;
    let nameElement = document.getElementById(name);
    nameElement.style.animation = "flash 3.5s infinite ease-in";
    // newGame.board.savePositions();

    document.removeEventListener("keydown", newGame.board.moveUnit);
    let counter = document.getElementById("moveCounter");
    counter.style.display = "none";
    let moveOptions = document.getElementsByClassName("moveB");
    for (let i = 0; i < moveOptions.length; i++) {
      moveOptions[i].style.display = "block";
    }
    // move.style.display = "none";
    document.getElementById("moveText").style.display = "none";
  });

  document.getElementById("cancel-move").addEventListener("click", () => {});

  document.getElementById("move").addEventListener("click", () => {
    let temp = [...newGame.board.unitTurn.pos];
    newGame.board.startingPos = temp;
    console.log(newGame.board.startingPos, "starting pos");
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("moveText").style.display = "block";
  });

  document.getElementById("cancel-attack").addEventListener("click", () => {
    document.getElementById("attackText").style.display = "none";
    // document.getElementById("moveOption").style.display = "block";
    let moveOptions = document.getElementsByClassName("moveB");
    for (let i = 0; i < moveOptions.length; i++) {
      moveOptions[i].style.display = "block";
    }
  });

  document.getElementById("start-game").addEventListener("click", () => {
    document.getElementById("start-game").style.display = "none";
    document.getElementById("stage-select").style.display = "block";
  });

  document.getElementById("standard").addEventListener("click", () => {
    newGame = new Game(1);
    document.getElementById("player-header").style.display = "flex";
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("view").style.display = "block";
    //make this dynamic later
    newGame.board.displayStatus("Bob");

    let units = document.getElementsByClassName("unit");
    let that = newGame;
    for (let i = 0; i < units.length; i++) {
      units[i].addEventListener("mouseover", (e) => {
        that.board.displayStatus(e.target.id);
        // let stats = newGame.board.findClickedUnit(e.target.id);
        // let info = document.getElementById("unitInfo");
        // info.innerHTML = `
        // Name: ${stats[3]}\n
        // <br>
        // Type: ${stats[4]}\n
        // <br>
        // Alliance: ${stats[5]}
        // <br>
        // <br>
        // HP: ${stats[0]}\n
        // <br>
        // ATK: ${stats[1]}\n
        // <br>
        // DEF: ${stats[2]}\n
        // <br>`;
      });
    }
    let name = newGame.board.unitTurn.name;
    let nameElement = document.getElementById(name);
    nameElement.style.animation = "flash 3.5s infinite ease-in";
    // console.log(document.getElementById(name));
  });

  document.getElementById("bridge").addEventListener("click", () => {
    newGame = new Game(2);
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("view").style.display = "block";
  });

  let endTurn = document.getElementById("end");

  endTurn.addEventListener("click", () => {
    // let name = newGame.board.unitTurn.name;
    // let nameElement = document.getElementById(name);
    // nameElement.style.animation = "none";

    newGame.board.savePositions();
    newGame.board.nextTurn();
    newGame.board.setCurrentMoveCount();
    newGame.board.moved = false;
    let move = document.getElementById("move");
    let attackText = document.getElementById("attackText");
    attackText.style.display = "none";
    move.style.display = "block";
    let moveOptions = document.getElementsByClassName("moveB");
    for (let i = 0; i < moveOptions.length; i++) {
      moveOptions[i].style.display = "block";
    }
    document.getElementById("moveText").style.display = "none";

    // let name2 = newGame.board.unitTurn.name;
    // let nameElement2 = document.getElementById(name2);
    // nameElement2.style.animation = "flash 3.5s infinite ease-in";
  });

  let move = document.getElementById("move");
  move.addEventListener("click", () => {
    let moveOptions = document.getElementsByClassName("moveB");
    for (let i = 0; i < moveOptions.length; i++) {
      moveOptions[i].style.display = "none";
    }
    let counter = document.getElementById("moveCounter");
    counter.style.display = "block";
    counter.textContent = `Moves Left: ${newGame.board.currentMoveCount}`;
    document.addEventListener("keydown", newGame.board.moveunit);

    // if (newGame.board.currentMoveCount === 0) {
    //     //delete counter
    //     let counter = document.getElementById("moveCounter");
    //     counter.style.display = "none";
    //     //add moveOptions
    //     let moveOptions = document.getElementsByClassName("moveB");
    //     for (let i = 0; i < moveOptions.length; i++) {
    //         moveOptions[i].style.display = "block";
    //     }
    //     move.style.display = "none";
    // }
  });

  let squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", (e) => {
      console.log(e.target.id);
    });
  }

  let attack = document.getElementById("attack");
  attack.addEventListener("click", () => {
    let moveOptions = document.getElementsByClassName("moveB");
    for (let i = 0; i < moveOptions.length; i++) {
      moveOptions[i].style.display = "none";
    }

    let attackText = document.getElementById("attackText");
    attackText.style.display = "block";

    let player = newGame.board.unitTurn.owner;

    let units = document.getElementsByClassName("unit");
    for (let i = 0; i < units.length; i++) {
      let that = units[i];
      if (!player) {
        units[i].addEventListener(
          "click",
          (e) => {
            console.log("enemy attack");
            console.log(e.target.id);
            if (
              newGame.board.allyNames.includes(e.target.id) &&
              newGame.board.unitTurn.owner === null
            ) {
              console.log("check");
              newGame.board.attack(e.target.id);
              newGame.board.savePositions();
              newGame.board.nextTurn();
              newGame.board.setCurrentMoveCount();
              let move = document.getElementById("move");
              move.style.display = "block";
              let attackText = document.getElementById("attackText");
              attackText.style.display = "none";
              for (let i = 0; i < moveOptions.length; i++) {
                moveOptions[i].style.display = "block";
              }
            }
            // that.removeEventListener();
          },
          { once: true }
        );
      } else {
        units[i].addEventListener(
          "click",
          (e) => {
            console.log("ally attack");

            if (
              newGame.board.enemyNames.includes(e.target.id) &&
              newGame.board.unitTurn.owner !== null
            ) {
              newGame.board.attack(e.target.id);
              newGame.board.savePositions();
              newGame.board.nextTurn();
              newGame.board.setCurrentMoveCount();
              let move = document.getElementById("move");
              move.style.display = "block";
              let attackText = document.getElementById("attackText");
              attackText.style.display = "none";
              for (let i = 0; i < moveOptions.length; i++) {
                moveOptions[i].style.display = "block";
              }
            }
            // that.removeEventListener();
          },
          { once: true }
        );
      }
    }
  });
});
