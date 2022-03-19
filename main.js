Mx=0;
My=0;
function preload(){
mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    posenet=ml5.poseNet(video,modelLoaded);
    
   posenet.on('pose',gotPoses) 
}
function gotPoses(results){
    if(results.length>0){
        Mx =results[0].pose.nose.x-15;
        My =results[0].pose.nose.y+16;
        console.log(results);
        console.log("Mx ="+results[0].pose.nose.x);
        console.log("My ="+results[0].pose.nose.y);

    }
}
function draw(){
  image(video,0,0,300,300);
  image(mustache,Mx,My,50,25)

}
function modelLoaded(){
    console.log("Model Loaded");
}
function take_snapshot(){
    save("Mustache.png");

}