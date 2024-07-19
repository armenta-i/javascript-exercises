const sumAll = function(numberOne, numberTwo) {
    let sum = 0;

    // Used to check if params are negative
    if(numberOne < 0 || numberTwo < 0) {
        return "ERROR";
    }
    // Checking if params are not numbers
    else if(Number.isInteger(numberOne) === false || Number.isInteger(numberTwo) === false){
        return "ERROR";
    }
    else if(numberOne % 1 !== 0 || numberTwo % 1 !== 0) {
        return "ERROR ";
    }
    else {
        if(numberOne < numberTwo) {
            for(let i = numberOne; i <= numberTwo; i++) {
                sum += i;
            }
        }
        else {
            for(let i = numberTwo; i <= numberOne; i++) {
                sum += i;
            }
        }
    }
    
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
