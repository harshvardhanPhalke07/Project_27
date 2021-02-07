class rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX= offsetX
        this.offsetY=offsetY
        var options= {
          bodyA:body1,
          bodyB:body2,
         pointB:{x:this.offsetX,offsetX, y:this.offsetX}
          }
        this.rope=Constraint.create(options)
      World.add (world,this.rope)
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
    
        strokeWeight(2);

      var anchor1X=pointA.x
      var anchor1Y=pointA.y
       var Anchor2X=pointB.x+this.offsetX
       var Anchor2Y=pointB.y+this.offsetY
      line (anchor1X,anchor1Y,Anchor2X,Anchor2Y)    
    }
}