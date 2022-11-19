const SHA256 = require('crypto-js/sha256');
const events = require('events')
const eventEmitter = new events.EventEmitter;

function transactionReceived()  {
    console.log(`Transaction received...`)
}

const getAddress = function() {
    const address = SHA256("Nader");
    console.log(`Wallet address is ${address}`);
}

const depositAmount = (amount) => {
    eventEmitter.emit('deposited!');
    console.log(`Amount: ${amount} deposited.`);
}

module.exports = {
    getAddress,
    depositAmount
}
