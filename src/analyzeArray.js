function analyzeArray(array = []) {
    let obj =
    {
        average: array.reduce((a, b) => a + b) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    };
  
    return obj ;
}
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));




module.exports = analyzeArray;