noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseY = " + noseY + "noseX = " + noseX);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("rightWristX = " + rightWristX + "leftWristX = " + leftWristX);
    }
}

function draw() {
    background('yellow');
    document.getElementById("square_side").innerHTML = "Width  height of the square will be = " + difference + "px";
     fill('blue');
     stroke('#F90093');
     square(noseX, noseY, difference);
}
