function solution(letter) {
    let answer = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const morse = [ '.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--',
                   '-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..' ]
    
    let temp_str = [];
    temp_str = letter.split(' ');
    console.log(temp_str);
    
    for(let i = 0; i < temp_str.length; i++){
        for(let j = 0; j < morse.length; j++){
            if(temp_str[i] === morse[j]){
                answer += alphabet[j];
                break;
            }
        }
    }
    
    
    return answer;
}