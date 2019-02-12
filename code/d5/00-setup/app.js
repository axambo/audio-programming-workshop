// Source code from: https://www.keithmcmillen.com/blog/making-music-in-the-browser-web-midi-api/

window.onload = function() {


// request MIDI access
if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess({
      sysex: false // this defaults to 'false' and we won't be covering sysex in this article. 
  }).then(onMIDISuccess, onMIDIFailure);
} else {
  alert("No MIDI support in your browser.");
}

// midi functions
function onMIDISuccess(midiAccess) {
  // when we get a succesful response, run this code
  console.log('MIDI Access Object', midiAccess);
    // when we get a succesful response, run this code
    midi = midiAccess; // this is our raw MIDI data, inputs, outputs, and sysex status

    var inputs = midi.inputs.values();
    // loop over all available inputs and listen for any MIDI input
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        // each time there is a midi message call the onMIDIMessage function
        input.value.onmidimessage = onMIDIMessage;
    }
}

function onMIDIFailure(e) {
  // when we get a failed response, run this code
  console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}

function onMIDIMessage(message) {
  data = message.data; // this gives us our [command/channel, note, velocity] data.
  console.log('MIDI data', data); // MIDI data [144, 63, 73]
}

}  

