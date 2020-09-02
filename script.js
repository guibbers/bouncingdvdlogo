//declare variables
const FPS = 30;
var ls = 30; //ls = Logo Size
var lx, ly; //logo x and logo y positions
var xv, yv; //xv = x velocity, yv = y velocity
var canvas, context;
var scale = 0.09;
var dvd = {
    img: new Image()
}
dvd.img.src = "assets/dvd-video-logo.png"


//load canvas
canvas = document.querySelector('#canvas');
context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.left = 0;
canvas.style.top = 0;

//set up loop
setInterval(update, 1000 / FPS);

//logo starting position
lx = canvas.width / 2;
ly = canvas.height / 2;

//random logo starting speed (between 100 and 200 pixels per second)
xv = Math.floor(Math.random() * 101 + 100) / FPS;
yv = Math.floor(Math.random() * 101 + 100) / FPS;

//random logo direction
if (Math.floor(Math.random() * 2) == 0){
    xv = -xv;
    yv = -yv;
}

//update function
function update(){
    //move the logo
    lx += xv;
    ly += yv;

//bounce the logo off each wall
if (lx+dvd.img.width*scale >= canvas.width || lx <= 0){
        xv *= -1;
}
if (ly+dvd.img.height*scale >= canvas.height || ly <= 0){
        yv *= -1;
}

//draw background and logo
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);


context.fillRect(lx, ly, dvd.img.width*scale, dvd.height*scale);
context.drawImage(dvd.img, lx, ly, dvd.img.width*scale, dvd.img.height*scale)
}


    




