// Method 2: copy-paste adding window.onload function and call of the function in the header

window.onload = function() {

  var AudioContext = window.AudioContext || window.webkitAudioContext;    
  var context;
  var player; 
  var splitter, merger;    
  var leftDelay, rightDelay, delayAmount;
  var leftFeedback, rightFeedback;

  document.querySelector("#button1").addEventListener('click', function() {
    context = new AudioContext();

    merger = context.createChannelMerger(2);
    splitter = context.createChannelSplitter(2);

    // create a sound input node from an audio sample
    player = context.createBufferSource();
    player.loop = false;

    // create a delay effect node
    leftDelay = context.createDelay();
    rightDelay = context.createDelay();

    // create a gain effect node
    leftFeedback = context.createGain();
    rightFeedback = context.createGain();

    // play the sound
    loadSound("sound.mp3");

    // connect the different nodes
    player.connect(splitter);
    player.connect(context.destination);

    splitter.connect(leftDelay, 0);
    leftDelay.delayTime.value = 0.5;

    leftDelay.connect(leftFeedback);
    leftFeedback.gain.value = 0.6;
    leftFeedback.connect(rightDelay); 

    splitter.connect(rightDelay, 1);
    rightDelay.delayTime.value = 0.5;

    rightDelay.connect(rightFeedback);
    rightFeedback.gain.value = 0.6;    
    rightFeedback.connect(leftDelay);    

    leftFeedback.connect(merger, 0, 0);
    rightFeedback.connect(merger, 0, 1);

    merger.connect(context.destination); 

  });

  document.querySelector("#button2").addEventListener('click', function() {
    player.stop();
  });
 

// Method 1 

    function loadSound(soundfile) {
        var request = new XMLHttpRequest();
        request.open('GET', soundfile, true);
        request.responseType = 'arraybuffer';

        // Decode asynchronously
        request.onload = function() {
            context.decodeAudioData(request.response, function(buffer) {
            player.buffer = buffer;
            player.start();
            }, onError);
        }
        request.send();
    }

    function onError(){
        console.log("The file could not be loaded");
    }

}
