class lvl1{
    constructor(){
        this.storylineBool = false
        this.storylinePart = 0

        this.w = windowWidth
        this.h = windowHeight

        this.touchGround = true

        this.p1 = new Platform(310, this.h / 1.25, 650, this.h / 360, 57, 0.5, 20)
        this.p2 = new Platform(760, this.h / 1.25, 130, this.h / 360, 45, 0.5, 20)
        this.p3 = new Platform(950, this.h / 1.33, 130, this.h / 360, 47.5, 0.5, 20)
        this.p4 = new Platform(1085, this.h / 1.33, 25, this.h / 360, 3, 0.5, 20)


        this.storyp1 = loadImage("Images/Speeches/Speech1.png")
        this.storyp2 = loadImage("Images/Speeches/Speech2.png")
        this.storyp3 = loadImage("Images/Speeches/Speech3.png")
        this.storyp4 = loadImage("Images/Speeches/Speech4.png")
        this.storyp5 = loadImage("Images/Speeches/Speech5.png")
        this.storyp6 = loadImage("Images/Speeches/Speech6.png")
        this.storyp7 = loadImage("Images/Speeches/Speech7.png")

        this.moveInstruct = loadImage("Images/AD to move.png")
        this.moveInVis = 0

        this.jumpInstruct = loadImage("Images/Spacebar to jump.png")
        this.jumpInVis = 0


        this.ground = createSprite(this.w / 2, this.h - this.h / 20, this.w, this.h / 10)
        this.ground.visible = false

        this.groundCollider = createSprite(this.w * 0.5, this.h - this.h / 20 - 3, this.w, this.h / 10)
        this.groundCollider.visible = false

        this.leftCollider = createSprite(displayWidth / 6, this.h / 2, displayWidth / 3.06, this.h)
        this.leftCollider.visible = false

        this.lWall = createSprite(-1 * displayWidth / 6.5, this.h, this.w / 3, this.h)
        this.lWall.visible = false

        collidergroup.add(this.groundCollider)
        tgroup.add(this.ground)

        this.storylineBg = createSprite(this.w / 2, this.h / 2, this.w, this.h)
        this.storylineBg.visible = false

        // this.storyline = createSprite(this.w / 2 - this.w / 15  , this.h / 4 + this.h / 25, this.w, this.h / 2)
        // this.storyline.scale = 0.8

        this.continueStory = true

        this.cameraPlus = 0
        this.leftcameraPlus = 0
    }


    play(){
        console.log(this.w, this.h)
        this.ground.x = camera.position.x
        this.groundCollider.x = camera.position.x
        this.w = camera.position.x  + camera.position.x

        player.plr.collide(this.lWall)


        image(bg, 0, 0, 4352, this.h)
        if(this.storylineBool){

            if(keyIsDown(32) && this.continueStory){
                this.storylinePart += 1
                this.continueStory = false
            }

            if(keyWentUp(32)){
                this.continueStory = true
            }
    
            if(this.storylinePart == 0){
                this.storyline.addImage(this.storyp1)
            }else if(this.storylinePart == 1){
                this.storyline.addImage(this.storyp2)
            }else if(this.storylinePart == 2){
                this.storyline.addImage(this.storyp3)
            }else if(this.storylinePart == 3){
                this.storyline.addImage(this.storyp4)
            }else if(this.storylinePart == 4){
                this.storyline.addImage(this.storyp5)
            }else if(this.storylinePart == 5){
                this.storyline.addImage(this.storyp6)
            }else if(this.storylinePart == 6){
                this.storyline.addImage(this.storyp7)
            }else if(this.storylinePart > 6){
                this.storyline.destroy()
                this.storylineBool = false
            }

        }else{
            if(collidergroup.isTouching(player.plr)){
                this.touchGround = true
              }
    
              
             if(keyDown("LEFT_ARROW") || keyDown(65)){
               player.plr.x -= 4
               player.plr.changeAnimation("run", panimation)
               player.plr.mirrorX(-1)
               camera.position.x -= this.leftcameraPlus
             }else if(keyDown("RIGHT_ARROW") || keyDown(68)){
               player.plr.x += 4
                player.plr.changeAnimation("run", panimation)
                player.plr.mirrorX(1)
                camera.position.x += this.cameraPlus
             }else if(keyDown("UP_ARROW") && this.touchGround && player.plr.isTouching(tgroup) == false || keyDown(32) && this.touchGround && player.plr.isTouching(tgroup) == false){
               player.plr.velocityY = -12
               this.touchGround = false
               player.plr.changeAnimation("jump", pjump)
             }else{
                 player.plr.changeAnimation("idle", pidle)
             }
            
             if(this.touchGround != true){
               player.plr.changeAnimation("jump", pjump)
             }
            
             player.plr.velocityY = player.plr.velocityY + 0.8

             if(player.plr.x > this.w / 2 - this.w / 100){
                 this.cameraPlus = 4
             }else if(player.plr.x < this.w / 2){
                this.cameraPlus = 0
             }

             if(player.plr.x > this.w / 3){
                 this.leftcameraPlus = 0
             }else if(player.plr.x <= this.w / 3 && player.plr.isTouching(this.leftCollider) == false){
                 this.leftcameraPlus = 4
             }else if(player.plr.isTouching(this.leftCollider)){
                 this.leftcameraPlus = 0
             }
             

                if(player.plr.x > 0){
                    push()
                    tint(255, this.moveInVis)
                    image(this.moveInstruct, displayWidth / 50, this.h / 1.5, displayWidth / 8.5, this.h / 36)
                    this.moveInVis += 4
                    pop()
                }  

                if(player.plr.x > this.w / 3){
                    push()
                    tint(255, this.jumpInVis)
                    image(this.jumpInstruct, displayWidth / 2.3, this.h / 1.5, displayWidth / 6.4, this.h / 36)
                    this.jumpInVis += 4
                    pop()
                }else{
                    this.jumpInVis = 0
                }         
        }
    }


}