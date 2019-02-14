// Source code from: https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/

window.onload = function() {

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var context;
    var oscillator; 
    var playing = false;
    // document.querySelector("#button1").addEventListener('click', function() {
    //   context = new AudioContext();
    //   oscillator = context.createOscillator();
    //   oscillator.connect(context.destination);
    //   oscillator.frequency.value = 440;
    //   oscillator.type = "triangle"; // "sine", "square", "sawtooth", "triangle"
    //   oscillator.start();
    // });
 
    document.querySelector("#button1").addEventListener('touchstart', touchStart, false);
    document.querySelector("#button1").addEventListener('click', touchStart, false);
    
    function touchStart(event) {
      if(playing) return;
      playing = true;  
      context = new AudioContext();
      oscillator = context.createOscillator();
      oscillator.connect(context.destination);
      oscillator.frequency.value = 440;
      oscillator.type = "triangle"; // "sine", "square", "sawtooth", "triangle"
      oscillator.start();      
    } 

    document.querySelector("#button2").addEventListener('touchstart', touchStop, false);
    document.querySelector("#button2").addEventListener('click', touchStop, false);

    function touchStop(event) {
      playing = false;  
      oscillator.stop();      
    } 


}  

