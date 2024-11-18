function solution(myString, pat) {
    let answer = '';
    let idx = [];
    
    for(let i = 0; i <= myString.length-pat.length; i++) {
        if(myString[i] === pat[0]) {
            let j;
            for(j = 1; j < pat.length; j++) {
                if(myString[i+j] !== pat[j]) break;
            }
            if(j === pat.length) idx.push(i);
        }
    }
    
    let lastIdx = idx.pop();
    
    for(let i = 0; i < lastIdx + pat.length; i++) answer += myString[i];
    
    return answer;
}