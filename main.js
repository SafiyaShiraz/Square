noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup()
{
video = createCapture(VIDEO); 
video.size(550, 550);

canvas = createCanvas(550, 550);
canvas.position(560, 150)

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
canvas.background('#c4dbdf');  
document.getElementById("square_sides").innerHTML= "Width and Height of the Square="+difference+"px";  
fill('#cec5e2');
stroke('#cfe2f3');
square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses(results)
{

if(results.length > 0)
{
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("Nose X="+noseX+"Nose Y="+noseY);
rightWristX = results[0].pose.rightWrist.x;
leftWristX = results[0].pose.leftWrist.x;
difference = floor(leftWristX-rightWristX);
    console.log("Right Wrist X="+rightWristX+"Left Wrist X="+leftWristX+"Difference="+difference);

}

}