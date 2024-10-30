function solution(myString, pat) {
    let answer = 0;
    let temp = '';
    
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] === 'A') temp += 'B';
        else temp += 'A';
    }
    
    if(temp.includes(pat)) answer = 1;
    
    
    return answer;
}