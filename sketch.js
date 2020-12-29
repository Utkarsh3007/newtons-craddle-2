const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
   
}

function setup() {
    var canvas = createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;
 
    bob1=new Pendulum(180,200)
    sl1=new Sling(bob1.body,{x:180,y:100})

    bob2=new Pendulum(260,200)
    sl2=new Sling(bob2.body,{x:260,y:100})

    bob3=new Pendulum(340,200)
    sl3=new Sling(bob3.body,{x:340,y:100})

    bob4=new Pendulum(420,200)
    sl4=new Sling(bob4.body,{x:420,y:100})

    bob5=new Pendulum(500,200)
    sl5=new Sling(bob5.body,{x:500,y:100})


}

function draw() {
    background("black");
    Engine.update(engine);
   bob1.display();
   sl1.display();
   
   bob2.display();
   sl2.display();

   bob3.display();
   sl3.display();

   bob4.display();
   sl4.display();

   bob5.display();
   sl5.display();

}
function mouseDragged(){
         Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
    }
function mouseReleased(){
         Matter.Body.setStatic(false);
    }