const repeatString = function(sentence, num) {
    if(num < 0) {
        return "ERROR";
    }
    else {
        let completeSentence = "";
        for(let i = 0; i < num; i++) {
            completeSentence += sentence;
        }
        return completeSentence;
    }
};

// Do not edit below this line
module.exports = repeatString;
