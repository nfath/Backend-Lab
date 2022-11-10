const say = require('say')

// use default system voice and speed
say.speak('Hello')

// // Stop the text from being spoken
say.stop()

// More complex example (with an OS X voice) and slow speed
say.speak("Hello", 'Alex', 0.5);
