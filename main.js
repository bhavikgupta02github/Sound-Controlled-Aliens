function start() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    My_Model = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Q8X1yc1ij/model.json',modelReady);
}
function modelReady() {
    My_Model.classify(gotResults);
}
function gotResults(error,results){
    if(error){console.log(error);} 
    else{
        console.log(results);
        document.getElementById("soundName").innerHTML="I can hear "+ results[0].label;
        document.getElementById("Acc").innerHTML="Accuracy "+ (results[0].confidence*100).toFixed(2)+" %";
        im1=document.getElementById("a1img");
        im2=document.getElementById("a2img");
        im3=document.getElementById("a3img");
        im4=document.getElementById("a4img");
        if(results[0].label=="Breaking Noise"){
            im1.src="aliens-01.gif";
            im2.src="aliens-02.png";
            im3.src="aliens-03.png";
            im4.src="aliens-04.png";
        }
        else if(results[0].label=="Clap"){
            im1.src="aliens-01.png";
            im2.src="aliens-02.gif";
            im3.src="aliens-03.png";
            im4.src="aliens-04.png";
        }
        else if(results[0].label=="Keys Jingling"){
            im1.src="aliens-01.png";
            im2.src="aliens-02.png";
            im3.src="aliens-03.gif";
            im4.src="aliens-04.png";
        }
        else{
            im1.src="aliens-01.png";
            im2.src="aliens-02.png";
            im3.src="aliens-03.png";
            im4.src="aliens-04.gif";
        }
    }
}