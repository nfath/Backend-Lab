const wallet = require("./modules/wallet");
const eventEmitter = require('events');
let ee = new eventEmitter();

let fn = () => console.log('Call me.');
ee.on('call', fn);
ee.emit('call');

let tr = () => console.log(`Transaction received ...`);
ee.on('deposited', tr);
ee.emit('deposited');

console.log('\n');
wallet.getAddress();
wallet.depositAmount(100);
