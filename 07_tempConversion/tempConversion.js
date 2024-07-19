const convertToCelsius = function(tempToConvert) {
  // Formula to convert F to C = (x − 32) × ⁠5/9
  let tempInCelsius = (tempToConvert - 32) * 5 / 9;
  if(tempInCelsius % 1 !== 0) {
    tempInCelsius = Number(tempInCelsius.toFixed(1));
  }
  return tempInCelsius;
};

const convertToFahrenheit = function(tempToConvert) {
  // Formula to convert C to F = (x × ⁠9/5) + 32)
  let tempInFarenheit = (tempToConvert * 9 / 5) + 32;
  if(tempInFarenheit % 1 !== 0) {
    tempInFarenheit = Number(tempInFarenheit.toFixed(1));
  }
  return tempInFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
