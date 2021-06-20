var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    physics: {
        default:'arcade',
        aracade: {
            gravity: {y : 200}
        }
    },
    scene: [Example1, Example2]
};
var images = [];
var game = new Phaser.Game(config);
var iter = 0;