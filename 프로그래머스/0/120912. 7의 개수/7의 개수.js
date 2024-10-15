function solution(array) {
    let answer = 0;
    
    for(let i = 0; i < array.length; i++) array[i] = array[i].toString();
    
    let string = '';
    string = array.join('');
    
    for(let i = 0; i < string.length; i++) if(string[i] === '7') answer++;
    
    return answer;
}