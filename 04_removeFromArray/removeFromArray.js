const removeFromArray = function(userArray, ...numbersToRemove) {
    let modifiedArray = userArray;
    let item;
    for(let i = 0; i < numbersToRemove.length; i++) {
        item = numbersToRemove[i]
        for(let j = userArray.length - 1; j >= 0; j--) {
        if(userArray[j] === item){
            modifiedArray.splice(j, 1);
        }
        }
    }
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
