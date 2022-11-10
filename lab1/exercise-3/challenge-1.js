const say = require('say')

say.speak('Hello')

function sorryDave() {
    say.speak("I'm sorry, Dave")
}
// say.stop()
function helloAlex() {
    say.speak('"Hello, Alex"');
  }

setTimeout(()=>{
  sorryDave();
}, 2000)

setTimeout(()=>{
  helloAlex();
}, 5000)
