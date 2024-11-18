function solution(myString, pat) {
    let answer = 0;
    
    for(let i = 0; i <= myString.length-pat.length; i++) {
        if(myString[i] === pat[0]) {
            let j;
            for(j = 1; j < pat.length; j++) {
                if(myString[i+j] !== pat[j]) break;
            }
            if(j === pat.length) answer++;
        }
    }
    
    return answer;
}