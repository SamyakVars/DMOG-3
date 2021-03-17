class Platform{
    constructor(x, y, w, h, minVal1, minVal2, val1){
        this.collider = createSprite(x - minVal1, y, val1, h)
        this.collider.shapeColor = "red"
        // this.collider.visible = false

        this.collider2 = createSprite(x, y - minVal2, w, h)
        // this.collider2.visible = false
        this.collider2.shapeColor = "red"

        this.sprite = createSprite(x, y, w, h)
        // this.sprite.visible = false

        tgroup.add(this.sprite)
        collidergroup.add(this.collider2)
        
    }
}