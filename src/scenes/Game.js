import Phaser from "phaser";
class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }
  preload() {
    this.load.image("background", "./img/background.png");
    this.load.image("gameover", "./img/congratulations.png");
    this.load.image("platform", "./img/platform.png");
  }
  create() {
    this.add.image(400, 250, "background");
    this.gameoverImage = this.add.image(400, 90, "gameover");
    this.gameoverImage.visible = false;

    this.platform = this.physics.add.image(400, 460, "platform");
    this.platform.body.allowGravity = false;
    this.cursors = this.input.keyboard.createCursorKeys();
  }
}
export default Game;
