const SHA256 = require('crypto-js/sha256');

const getAddress = function() {
    //const address = Math.random(1000);
    const address = SHA256("Nader");
    console.log(`Wallet address is ${address}`);
}

const depositAmount = (amount) => {
    console.log(`Amount: ${amount} deposited.`);
}

module.exports = {
    getAddress,
    depositAmount
}
