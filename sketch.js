const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot,score=0;
var gameState="onsling";
var bg="dark.jpg";



function preload() {
    getBackgroundImg();
 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Grou(200,400,220,20);
    ground01 = new Grou(600,700,1200,20);


    box1 = new Box(120,370,30,40);
    box2 = new Box(151,370,30,40);
 

    box3 = new Box(182,370,30,40);
    box4 = new Box(213,370,30,40);
 
    box5 = new Box(243,370,30,40);
    box6 = new Box(274,370,30,40);
    box7 = new Box(135,329,30,40);
    box8 = new Box(166,329,30,40);
    box9 = new Box(197,329,30,40);
    box10 = new Box(228,329,30,40);
    box11 = new Box(259,329,30,40);
    box12 = new Box(150,289,30,40);
    box13 = new Box(181,289,30,40);
    box14 = new Box(212,289,30,40);
    box15 = new Box(243,289,30,40);
    box16 = new Box(165,249,30,40);
    box17 = new Box(196,249,30,40);
    box18 = new Box(227,249,30,40);
    box19 = new Box(180,209,30,40);
    box20 = new Box(211,209,30,40);
    box21 = new Box(195,169,30,40);
   ground1 = new striker(505,109,30,30)
    slingshot = new sling(ground1.body,{x:505, y:80});
}
function draw(){
    if(backgroundImg)
        background(backgroundImg);
        fill("blue")
text("SCORE:"+score,150,40);
    Engine.update(engine);

    ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   box8.score();
   box9.score();
   box11.score();
   box12.score();
   box13.score();
   box14.score();
   box15.score();
   box16.score();
   box17.score();
   box18.score();
   box19.score();
   box20.score();
   box21.score();
   ground1.display();
   ground01.display();
   slingshot.display();
    drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(ground1.body,{x:mouseX,y:mouseY})
	
	
    }
    function mouseReleased(){
        slingshot.fly()
     }
     function keyPressed(){
        if(keyCode===32){
            Matter.Body.setPosition(ground1.body,{x:505,y:109})
            slingshot.attach(ground1.body);
    
        }
    }
    async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var  responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=0600 && hour<=1900){
            bg = "light.jpg";
        }
        else{
            bg = "dark.jpg";
        }
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    }
