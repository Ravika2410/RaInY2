class umbrella{
    constructor(x,y,h)
    {
        
        var property=
        {
        isStatic:true,
        restitution:0,
        friction:0.1,
        density:1.2
        };
        this.height=h;
        this.body=Matter.Bodies.circle(x,y,this.height,property);
        Matter.World.add(myWorld,this.body);
    }
display()
{
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.height);
}
        
}