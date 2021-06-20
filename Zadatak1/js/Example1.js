class Example1 extends Phaser.Scene {
    constructor() {
        super({key: "Example1"});
    }
    preload(){
        this.load.image('background', 'assets/main-bg-portrait.png');
        this.load.atlas('atlas','assets/backgroundAnim.png','assets/backgroundAnim.json');
    }

    create(){
        this.add.image(100,-10,'background').setOrigin(0,0).setScale(0.5);
    
        // Animation set
        this.anims.create({
            key: 'anima',
            frames: this.anims.generateFrameNumbers('atlas', { frames: ['portrait_01', 'portrait_02', 'portrait_03', 'portrait_04', 'portrait_05'] }),
            frameRate: 8,
            repeat: -1
        });
        const cody = this.add.sprite(350, 150);
        cody.play('anima');
    }

    update(){
       if(window.innerWidth > window.innerHeight){
            this.time.addEvent({
                loop: false,
                callback: () => {
                    this.scene.start("Example2");
                }
        })
       }
    }
    
}