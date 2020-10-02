class Chain{
    constructor(bodyA, pointA){
        var options = {
            bodyA: bodyA,
            pointB: pointA,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA){
          var pointA = this.chain.bodyA.position;
          var pointB = this.chain.pointB;
          strokeWeight(4);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      
    }

    release(){
        this.chain.bodyA = null; 
    }
    
}