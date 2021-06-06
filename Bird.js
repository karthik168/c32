class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){

    

    var position=[this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    
    
    }
    for(var k=0;k<this.trajectory.length;k++){
    image(this.smokeimage,this.trajectory[k][0],this.trajectory[k][1])
    }
  }
}
