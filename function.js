song1 = "";
song2 = "";

function preload() {
    song1 = loadSound("Ruelle- I Get To Love You.mp3")
    song2 = loadSound("Ruelle- War Of Hearts.mp3")
        }
function setup() {
    canvas= createCanvas(650,500)
    canvas.position(450,250)

    video= createCapture(VIDEO);
    video.size(650, 500)
    video.hide();

}
function draw(){
image(video, 0, 0, 650, 500)
}

