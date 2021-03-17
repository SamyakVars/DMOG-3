class Plr{
    constructor(x, y, ani1, ani2, ani3){
        this.plr = createSprite(x, y, 20, 20)
        this.plr.addAnimation("idle", ani1)
        this.plr.addAnimation("run", ani2)
        this.plr.addAnimation("jump", ani3)
        this.plr.setCollider("rectangle", 0, 0, 15, 35)
        this.plr.scale = 1.5
    }
}