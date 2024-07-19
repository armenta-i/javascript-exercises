const reverseString = function(userString) {
    let stringReversed = "";
    for(let i = userString.length; i >= 0; i--){
        stringReversed += userString.charAt(i);
        console.log(reverseString)
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
