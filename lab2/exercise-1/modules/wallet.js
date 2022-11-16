const getAddress = function() {
    const address = Math.random(1000);
    console.log(`Wallet address is ${address}`);
}

module.exports = {
    getAddress
}
