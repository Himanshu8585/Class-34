var hball;
var database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(400,400);
    hball = createSprite(200,200,10,10);
    hball.shapeColor = "red";
    var hballposition;
    hballposition=database.ref("ball/position");
    hballposition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function writeposition(x,y){
    database.ref("ball/position").set({

        "x":position.x+x,
        "y":position.y+y

    })
   
}

function readPosition(data) {

    position=data.val();
    hball.x=position.x;
    hball.y=position.y;

}

function showError(){

    console.log("error in extracting the values from database")

}
