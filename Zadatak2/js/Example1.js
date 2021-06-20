class Example1 extends Phaser.Scene {
    constructor() {
        super({key: "Example1"});
    }
    preload(){
        this.load.image('background', 'assets/main-bg-portrait.png');
        this.load.atlas('atlas','assets/star.png','assets/star.json');
        this.load.atlas('blue','assets/winLineSegment.png','assets/winLineSegment.json');
    }

    create(){
        this.add.image(100,-100,'background').setOrigin(0,0).setScale(0.5);      
        // Animation set
        this.anims.create({
            key: 'anima',
            frames: this.anims.generateFrameNumbers('atlas', { frames: ['smallStars_1', 'smallStars_2', 'smallStars_3', 'smallStars_4', 'smallStars_5'] }),
            frameRate: 4,
            repeat: -1
        });
        const cody = this.add.sprite(350, 150);
        cody.setScale(2);
        cody.play('anima');

        this.anims.create({
            key: 'aniblue',
            frames: this.anims.generateFrameNumbers('blue', { frames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'] }),
            frameRate: 30,
            repeat: -1
        });
        const gody = this.add.sprite(400, 630);
        gody.setScale(6);
        gody.play('aniblue');
        const upgody = this.add.sprite(400,0);
        upgody.setScale(6);
        upgody.play('aniblue');
        const leftgody = this.add.sprite(0,350);
        leftgody.setAngle(90);
        leftgody.setScale(6);
        leftgody.play('aniblue');
        const rightgody = this.add.sprite(800,350);
        rightgody.setAngle(90);
        rightgody.setScale(6);
        rightgody.play('aniblue');
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