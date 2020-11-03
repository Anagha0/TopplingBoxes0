class Ground{
	
	constructor(xPosition,yPosition,width,height){
   this.object = Bodies.rectangle(xPosition,yPosition,width,height,{isStatic : true})
   World.add(world,this.object)
   this.width = width
    this.height = height
	}

	display(){
		  rectMode(CENTER)

rect(this.object.position.x,this.object.position.y,this.width,this.height)
	}
}