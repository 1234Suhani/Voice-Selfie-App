var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

function Start() {
 document.getElementById("text_box").innerHTML = ""; 
recognition.start();
 } 

 recognition.onresult = function(event) 
 { console.log(event); 
var Content = event.results[0][0].transcript; 
 document.getElementById("text_box").innerHTML = Content;
 console.log(Content);
 if(Content=="take my selfie") {
    speak();
 }
}
Camera= document.getElementById("camera");
Webcam.set({
    width:400, height:350, image_format:'png', png_quality:90
});
function speak(){
    var synth= window.speechSynthesis;
    var speak_data= "Taking your selfie in 5 seconds";
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(Camera);
    setTimeout(function(){
        take_selfie();
        save();
    },5000);
}


function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>';
    });
}

function save(){
 image= document.getElementById("selfie").src;
link = document.getElementById("link");
link.href=image;
link.click();
}
