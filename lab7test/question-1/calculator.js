const isDigit = (x) => {
    if (isNaN(x) || typeof(x) != 'number'){
        console.log(`${x} is not a digit!`);
        return false;
    }
    return true;
}

const multiplyTwoNumbers = (x, y) => {
    if (isDigit(x) && isDigit(y) ){
        return x * y;
    }
}

const evenDoubler = (x) => {
    if(!isDigit(x)){
        console.log
        return;
    }
    else if (x % 2 == 0){
        return x * x;
    }
    else {
        return 0
    }
}

//console.log(multiplyTwoNumbers(5,3));
//console.log(evenDoubler(2.5));

module.exports = {
    mult: multiplyTwoNumbers,
    eDub: evenDoubler
}

