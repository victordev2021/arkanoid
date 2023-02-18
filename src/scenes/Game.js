import Phaser from "phaser";
class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {
    this.load.image("background", "/public/img/background.png");
    // this.load.image("gameover", "../resources/congratulations.png");
  }
  create() {
    this.add.image(400, 250, "background");
  }
}
export default Game;
