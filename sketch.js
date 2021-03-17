var tgroup, collidergroup;

var player, panimation, pidle, pjump;

var level;




function preload(){
  bg = loadImage("Images/Bg.png")
  panimation = loadAnimation("Images/Dyso/Move/red/r1.png", "Images/Dyso/Move/red/r2.png", "Images/Dyso/Move/red/r3.png", "Images/Dyso/Move/red/r4.png", "Images/Dyso/Move/red/r5.png", "Images/Dyso/Move/red/r6.png", "Images/Dyso/Move/red/r7.png", "Images/Dyso/Move/red/r8.png")
  pidle = loadAnimation("Images/Dyso/Move/red/Idle.png")
  pjump = loadAnimation("Images/Dyso/Move/red/j1.png", "Images/Dyso/Move/red/j2.png", "Images/Dyso/Move/red/j3.png", "Images/Dyso/Move/red/j4.png", "Images/Dyso/Move/red/j5.png", "Images/Dyso/Move/red/j6.png", "Images/Dyso/Move/red/j7.png", "Images/Dyso/Move/red/j8.png", "Images/Dyso/Move/red/j9.png", "Images/Dyso/Move/red/j10.png")
}
function setup() {
  

  tgroup = createGroup()
  collidergroup = createGroup()
  level = new lvl1()

  createCanvas(level.w, level.h);

  player = new Plr(50, 500, pidle, panimation, pjump)
}

function draw() {
  background(200); 
  player.plr.collide(tgroup)
  level.play()
  // console.log(mouseX)



  drawSprites();
}

function mousePressed(){
  
}

