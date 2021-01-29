class drops{
    constructor(x,y,h)
    {
        
        var property=
        {
        restitution:0,
        friction:0.1,
        density:0.6
        };

        this.height=h;
        this.body=Matter.Bodies.circle(x,y,this.height,property);
        Matter.World.add(myWorld,this.body);
    }
display()
{
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(this.body.position.x,this.body.position.y,this.height);
    if(this.body.position.y>800)
    {
        body.setPosition(this.body,{x:random(0,500),y:random(0,500)});
    }
}
        
}