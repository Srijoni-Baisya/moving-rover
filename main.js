canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";
rover_image="rover.png";

rover_x = 10;
rover_y = 10;

function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadbackground;
    background_imageTag.src=background_image;

    rover_imageTag=new Image();
    rover_imageTag.onload=uploadrover;
    rover_imageTag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        console.log("up");
    }
    if(keyPressed=="40"){
        console.log("down");
    }
    if(keyPressed=="37"){
        console.log("left");
    }
    if(keyPressed=="39"){
        console.log("right");
    }
}