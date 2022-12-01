function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400);
    noFill();
    stroke(0, 0, 0)
    strokeWeight(10);
    rect(10, 10, 380, 380);
    strokeWeight(8)
    line(50, 10, 10, 50)
    line(50, 390, 10, 350)
    line(350, 10, 390, 50)
    line(390, 350, 350, 390)
}

function downloadPic() {
    save('download.png');
}