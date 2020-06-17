class Ground{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
             restitution:0.5,
             density:1.2,
             friction:0.5,
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        }
        
        display(){
         var posx=this.body.position.x
         var posy=this.body.position.y
         rectMode(CENTER);
         rect(posx,posy,this.width,this.height);

        }
}