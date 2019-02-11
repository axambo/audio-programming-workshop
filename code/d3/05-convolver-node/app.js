"use strict";
var audioContext = new AudioContext();
var impulseResponseBuffer;
var getSound = new XMLHttpRequest();
getSound.open("get", "sounds/impulse.wav", true);
getSound.responseType = "arraybuffer";
getSound.onload = function() {
audioContext.decodeAudioData(getSound.response, function(buffer) {
impulseResponseBuffer = buffer;
});
};
getSound.send();
/*___________________________________________BEGIN playback
functionality*/
var osc = audioContext.createOscillator();

function playback() {
    var convolver = audioContext.createConvolver();
    osc = audioContext.createOscillator();
    osc.type = "sawtooth";
    convolver.buffer = impulseResponseBuffer;
    osc.connect(convolver);
    convolver.connect(audioContext.destination);
    osc.start(audioContext.currentTime);
    }
    $(function() {
    $("button").on("mousedown", function() {
    playback();
    });
    $("button").on("mouseup", function() {
    osc.stop();
    });
    });