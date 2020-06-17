class Papper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
             restitution:0.5,
             density:1.2,
             friction:0.5,
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
        }
        
        display(){
         var posx=this.body.position.x
         var posy=this.body.position.y
         imageMode(CENTER);
         image(this.image,posx,posy,this.radius,this.radius);

        }
}