function solution(myString) {
    let answer = [];
    let cnt = 0;
    
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] === 'x') {
            answer.push(cnt);
            cnt = 0;
        }
        else cnt++;
    }
    
    answer.push(cnt);
    
    return answer;
}