class Example2 extends Phaser.Scene {
    constructor() {
        super({key: "Example2"});
    }
    preload(){
        this.load.image('backgroundp', 'assets/main-bg.png');
        this.load.atlas('atlas','assets/backgroundAnim.png','assets/backgroundAnim.json');
    }
    create(){
        this.add.image(0,0,'backgroundp').setOrigin(0,0).setScale(0.5);
        this.anims.create({
            key: 'anime',
            frames: this.anims.generateFrameNumbers('atlas', { frames: ['landscape_01', 'landscape_02', 'landscape_03', 'landscape_04', 'landscape_05'] }),
            frameRate: 8,
            repeat: -1
        });
        const cody = this.add.sprite(350, 150);
        cody.play('anime');
    }
    update(){
        if(window.innerWidth < window.innerHeight){
            this.time.addEvent({
                loop: false,
                callback: () => {
                    this.scene.start("Example1");
                }
        })
       }
    }
}