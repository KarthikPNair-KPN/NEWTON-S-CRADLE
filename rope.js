class rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
       
        
       // if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;

            var A1X=pointA.x
            var A1Y=pointA.y
            var A2X=pointB.x+this.offsetX
            var A2Y=pointB.y+this.offsetY
        
       // stroke(0,0,0);
         
            strokeWeight(3);
            line(A1X,A1Y,A2X,A2Y);
        
       // }
    }    
}