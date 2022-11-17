const getAddress = function() {
    const address = Math.random(1000);
    console.log(`Wallet address is ${address}`);
}

const depositAmount = (amount) => {
    console.log(`Amount: ${amount} deposited.`);
}

module.exports = {
    getAddress,
    depositAmount
}
