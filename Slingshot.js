class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

     
        push();
        imageMode(CENTER);
        image(this.sling1,250,170,50,100)
        pop() ;
        bird.display();
        push();
        imageMode(CENTER);
        image(this.sling2,220,145,40,70)
        
        pop();

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            push();
            imageMode(CENTER);
            image(this.sling3,pointA.x-20,pointA.y,10,20)
            pop();
        }

    
    }
    
}