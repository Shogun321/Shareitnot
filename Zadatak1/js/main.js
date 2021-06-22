

var config = {
    type: Phaser.CANVAS,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 500
    },
    physics: {
        default:'arcade',
        aracade: {
            gravity: {y : 200}
        }
    },
    scene: [Example1]
};
var images = [];
var game = new Phaser.Game(config);


