
window.onload = function() {
    
    var AudioContext = window.AudioContext || window.webkitAudioContext;    
    var context, osc, gain;
    var impulseResponseBuffer=[];
    var convolver; 

    document.querySelector("#button0").addEventListener('click', function() {
        context = new AudioContext();
        //debugger;
        loadSound("sound.wav", 0);
        convolver = context.createConvolver();
        osc = context.createOscillator(); 
        gain = context.createGain(); 
        osc.type = "sawtooth";
        osc.start();  
        });

    document.querySelector("#button1").addEventListener('click', function() {     

        convolver.buffer = impulseResponseBuffer[0];     
        osc.connect(convolver);
        convolver.connect(gain);
        gain.gain.value = 0.2; // change this value
        gain.connect(context.destination);
        osc.connect(context.destination);    

    });


    document.querySelector("#button3").addEventListener('click', function() {
        if (osc) osc.stop();
    });


    // Method 1 

    function loadSound(soundfile, i) {
    var request = new XMLHttpRequest();
    request.open('GET', soundfile, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
        impulseResponseBuffer[i] = buffer; 
    }, onError);
    }
    request.send();

    }

    function onError(){
    console.log("The file could not be loaded");
    }

}