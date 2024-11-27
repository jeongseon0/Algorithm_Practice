const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let answer = '';
    
    for(let alphabet of str) {
        if(alphabet.toUpperCase() === alphabet) answer += alphabet.toLowerCase();
        else answer += alphabet.toUpperCase();
    }
    
    console.log(answer);
    
});