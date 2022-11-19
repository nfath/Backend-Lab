const SHA256 = require('crypto-js/sha256');
const eventEmitter = require('events');

const ee = new eventEmitter();

const getAddress = () => {
    const address = SHA256("Nader");
    console.log(`Wallet address is ${address}`);
}

const depositAmount = (amount) => {
    ee.emit('deposited!');
    console.log(`Amount: ${amount} deposited.`);
}

module.exports = {
    getAddress,
    depositAmount
}
