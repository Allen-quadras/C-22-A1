class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_base=loadImage("assets/cannonBase.png")
    this.canon_mouth=loadImage("assets/canon.png")
  }
  display(){
    push()
translate (this.x,this.y)
   rotate (this.angle) 
   imageMode (CENTER)
   image(this.canon_mouth,0,0,this.width,this.height)

    pop ()
    image(this.canon_base,70,20,200,200)
    noFill()
  }

}
