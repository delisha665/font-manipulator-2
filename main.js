function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,400);
video.position(150,300);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotResults)
}

function modelLoaded() {
    console.log("success");
}
function gotResults(results){
    // console.log(results);
    if(results.length>0){
        left_wrist=results[0].pose.leftWrist.x;
        console.log(left_wrist);
        
    }
}
