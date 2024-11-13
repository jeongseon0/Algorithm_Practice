function solution(myString) {
    let answer = [];
    let temp = '';
    
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] === 'x') {
            if(!temp) continue;
            answer.push(temp);
            temp = '';
        }
        else temp += myString[i];
    }
    
    if(temp) answer.push(temp);
    answer.sort();
    
    return answer;
}