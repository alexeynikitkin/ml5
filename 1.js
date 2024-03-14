let mobileNet;


let img;
function setup() {
    createCanvas(640, 480);
    img = createImg('images/img.jpg', imageReady);
    img.hide();
    background(0);
    mobileNet = ml5.imageClassifier('MobileNet', modelReady);

}

function modelReady() {
    console.log('Model is ready');
    mobileNet.predict(img, gotResults);
}

function imageReady(){
    image(img, 0, 0, width, height);
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    } else {
        console.log(results);
        let label = results[0].className;
        fill(0);
        textSize(64);
        createP(label);
    }
}