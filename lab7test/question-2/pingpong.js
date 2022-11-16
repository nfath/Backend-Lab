const EventEmitter = require('events');
const pingPongEm = new EventEmitter();

let playRounds = 0;

const playGame = (num) => {
  pingPongEm.on('ping', () => {
    setTimeout(() => {
      console.log(`Round ${playRounds} started!`);
      console.log('ping..');
      pingPongEm.emit('pong');
    }, 1000);
  });

  pingPongEm.on('pong', () => {
    setTimeout(() => {
      console.log('pong..');
      if (playRounds < num) {
        playRounds += 1;
        pingPongEm.emit('ping');
      } else {
        console.log('game completed..');
      }
    }, 1500);
  });

  if (playRounds < num) {
    playRounds += 1;
    pingPongEm.emit('ping');
  }
}

const playCount = 3
console.log(`paly ${playCount} times.`);
playGame(playCount);
