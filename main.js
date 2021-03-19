Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(imgSnap){
        document.getElementById('snapshot').innerHTML = "<img id='result_img' src="+imgSnap+">"
    })
}
console.log('ml5 version' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6or5Dj0iS/model.json' , modelLoaded);
function modelLoaded(){
    console.log('madal loaded');
}
function check(){
    img = document.getElementById("result_img");
    classifier.classify(img , got_result);
}
function got_result( error , result){
    if (error){
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("objectName").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = (result[0].confidence.toFixed(2))*100 + "%";
    }
}