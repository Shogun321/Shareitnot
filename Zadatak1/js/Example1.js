class Example1 extends Phaser.Scene {
    
    constructor() {
        super({key: "Example1"});
    }
    preload(){
        this.load.image('backgroundp', 'assets/main-bg-portrait.png');
        this.load.atlas('atlas','assets/backgroundAnim.png','assets/backgroundAnim.json');
        this.load.image('background', 'assets/main-bg.png');
    }

    create(){
        if(this.scale.orientation === Phaser.Scale.PORTRAIT){
            this.portrait();
        }
        else{
            this.landscape();
        }

        this.scale.on('orientationchange', function(orientation) {
            if (orientation === Phaser.Scale.PORTRAIT) {
                console.log("Ziv sam");
                this.portrait();
                // ...
            } else if (orientation === Phaser.Scale.LANDSCAPE) {
                this.landscape();
                // ...
            }
        }, this);
    }

    update(){
    }
    portrait() {
        this.add.rectangle(0,0,window.innerWidth, window.innerHeight).setOrigin(0,0);
        this.add.image(100,-10,'backgroundp').setOrigin(0,0).setScale(0.5);
        this.anims.create({
            key: 'anima',
            frames: this.anims.generateFrameNumbers('atlas', { frames: ['portrait_01', 'portrait_02', 'portrait_03', 'portrait_04', 'portrait_05'] }),
            frameRate: 4,
            repeat: -1
        });
        var spr1 = this.add.sprite(360, 140, 'atlas', 'portrait_01').setAlpha(0);
        var spr2 = this.add.sprite(360, 140, 'atlas', 'portrait_02').setAlpha(0);
        var spr3 = this.add.sprite(360, 140, 'atlas', 'portrait_03').setAlpha(0);
        var spr4 = this.add.sprite(360, 140, 'atlas', 'portrait_04').setAlpha(0);
        var spr5 = this.add.sprite(360, 140, 'atlas', 'portrait_05').setAlpha(0);
        this.tweens.add({
            targets: [spr1,spr2,spr3,spr4,spr5],
            yoyo: true,
            alpha: 1,
            duration: 2000,
            ease: 'Sine.easeInOut',
            repeat: -1,
        });
    }
    landscape(){
        this.add.image(0,0,'background').setOrigin(0,0).setScale(0.5);
        this.anims.create({
            key: 'anime',
            frames: this.anims.generateFrameNumbers('atlas', { frames: ['landscape_01', 'landscape_02', 'landscape_03', 'landscape_04', 'landscape_05'] }),
            frameRate: 4,
            repeat: -1
        });
        const cody = this.add.sprite(350, 150);
        cody.play('anime');
    }
}