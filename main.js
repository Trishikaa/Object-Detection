function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objectes";
}

img="";
status="";
objects=[];

function preload(){
img=loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);

    if(status!="")
    {
       for(i=0;i<objects.length;i++)
       {
        document.getElementById("status").innerHTML="Status:Object Detected";

        fill("#ed5807");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15)
        noFill()
        stroke("#ed5807");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
       } 
    }
    fill("#ed5807");
    text("Dog",45,75);
    noFill();
    stroke("#ed5807");
    rect(30,60,450,350);

    fill("#ed5807");
    text("Cat", 320, 120);
    noFill();
    stroke("#ed5807");
    rect(300,90,270,320);
}

function modelLoaded(){

    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if (error){

    }
    objects=results
}