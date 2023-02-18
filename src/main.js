import Phaser from "phaser";
import Game from "./scenes/Game";
// import "./sass/style.css";
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  scene: [Game],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
};
var game = new Phaser.Game(config);
// console.log("test ok!!!");
