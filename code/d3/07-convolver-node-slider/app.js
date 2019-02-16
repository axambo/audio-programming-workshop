
window.onload = function() {
    
    var AudioContext = window.AudioContext || window.webkitAudioContext;    
    var context, source, gain;
    var impulseResponse, impulseResponse2;
    var slider = document.getElementById("myRange");    

    document.querySelector("#button0").addEventListener('click', function() {
        context = new AudioContext();
        source = context.createBufferSource();
        impulseResponse = context.createConvolver();
        impulseResponse2 = context.createConvolver();        
        gain = context.createGain(); 
        loadSoundToBuffer("chopping.mp3", source);
        loadSoundToBuffer("ir.mp3", impulseResponse);   
        loadSoundToBuffer("ir2.mp3", impulseResponse2);                
        source.loop = true;
        source.start(0);
        //debugger;
        });

    document.querySelector("#button1").addEventListener('click', function() {     
   
        source.disconnect();
        source.connect(impulseResponse);  
        impulseResponse.connect(gain);
        gain.connect(context.destination);
        source.connect(context.destination);
        gain.gain.value = 0.5; // change this value
    });

    document.querySelector("#button2").addEventListener('click', function() {     
   
        source.disconnect();
        source.connect(impulseResponse2);  
        impulseResponse2.connect(gain);
        gain.connect(context.destination);
        source.connect(context.destination);
        gain.gain.value = 0.5; // change this value
    });    

    document.querySelector("#button3").addEventListener('click', function() {
        if (source) source.stop();
    });


    // Method 1 

    function loadSoundToBuffer(soundfile, stupid) {
    var request = new XMLHttpRequest();
    request.open('GET', soundfile, true);
    request.responseType = 'arraybuffer';
    console.log(soundfile);

    // Decode asynchronously
    request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
        stupid.buffer = buffer; 
    }, onError);
    }
    request.send();

    }

    function onError(){
    console.log("The file could not be loaded");
    }

    slider.oninput = function() {
        console.log(this.value);
        normSliderValue = this.value/100;
        console.log(normSliderValue);
        gain.gain.value = normSliderValue;
      }      

}