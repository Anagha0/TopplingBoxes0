class Box{
	

	constructor(xPosition,yPosition,width,height){
   this.object = Bodies.rectangle(xPosition,yPosition,width,height,{restitution : 0.8,friction : 0.3,density:1.0})
   World.add(world,this.object)
   this.width = width
    this.height = height
	}

	display()
	{
    push()
    translate(this.object.position.x,this.object.position.y)
    rotate(this.object.angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
	}
}