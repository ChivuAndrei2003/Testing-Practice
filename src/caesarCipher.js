//https://stackoverflow.com/questions/10617123/associative-array-with-alphabets-as-keys-in-javascript
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet[0]);
/*
let transformVal = () => {
    for (let i = 0; i < transformVal.length; i++){
        transformVal[i] = ;
    }
}*/
function caesarCipher(val, shifts) {
    return String(val)
}

module.exports = caesarCipher;