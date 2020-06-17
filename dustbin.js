class dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
             restitution:0.5,
             density:1.2,
             friction:0.5,
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.image=loadImage("dust.png");
        World.add(world,this.image);
        }
        
        display(){
         var posx=this.body.position.x
         var posy=this.body.position.y
         imageMode(CENTER);
         image(this.image,posx,posy,this.width,this.height);

        }
}