const leapYears = function(yearToDetermine) {
    let yearIsLeap = false;

    
    if((yearToDetermine % 100 === 0) && (yearToDetermine % 400 === 0)) {
        yearIsLeap = true;
        
    }
    else if((yearToDetermine % 100 === 0) && (yearToDetermine % 4 === 0)){
        yearIsLeap = false;
    }
    else {
        if((yearToDetermine % 4 === 0)){
            yearIsLeap = true;
    }
    }
    return yearIsLeap;
};

// Do not edit below this line
module.exports = leapYears;
