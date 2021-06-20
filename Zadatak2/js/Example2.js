class Example2 extends Phaser.Scene {
    constructor() {
        super({key: "Example2"});
    }
    preload(){
        this.load.image('backgroundp', 'assets/main-bg.png');
        this.load.atlas('atlas','assets/star.png','assets/star.json');
        this.load.atlas('blue','assets/winLineSegment.png','assets/winLineSegment.json');
    }
    create(){
        this.add.image(0,0,'backgroundp').setOrigin(0,0).setScale(0.5);
        this.anims.create({
            key: 'anime',
            frames: this.anims.generateFrameNumbers('atlas', { frames: ['smallStars_1', 'smallStars_2', 'smallStars_3', 'smallStars_4', 'smallStars_5'] }),
            frameRate: 4,
            repeat: -1
        });
        const cody = this.add.sprite(450, 150);
        cody.setScale(3);
        cody.play('anime');
        this.anims.create({
            key: 'anibla',
            frames: this.anims.generateFrameNumbers('blue', { frames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'] }),
            frameRate: 30,
            repeat: -1
        });
        const gody = this.add.sprite(400, 630);
        gody.setScale(6);
        gody.play('anibla');
        const upgody = this.add.sprite(400,0);
        upgody.setScale(6);
        upgody.play('anibla');
        const leftgody = this.add.sprite(0,350);
        leftgody.setAngle(90);
        leftgody.setScale(6);
        leftgody.play('anibla');
        const rightgody = this.add.sprite(800,350);
        rightgody.setAngle(90);
        rightgody.setScale(6);
        rightgody.play('anibla');
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