# Exercise: Convolver

**Source**: Turner, William (2017) "JavaScript for Sound Artists" (Chapter 16). CRC Press.

**Learning outcome**: Get a sense of how to apply a reverb effect in Web Audio.

**Exercise**: Apply a convolver filter to an sound. 

1. First, load the impulse response file, decode it, and store it in a buffer.
2. To integrate the impulse response into the node graph,
you should create a convolver node invoking the method ```audioContext.createConvolver()``` and store the returned object in a variable.
3. Connect any input source to the convolver node e.g. an oscillator.
4. Try to find new examples of impulse responses e.g. [https://freesound.org/search/?q=impulse+response](https://freesound.org/search/?q=impulse+response)

