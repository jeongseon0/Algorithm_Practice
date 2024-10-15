function solution(s) {
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        let cnt = 0;
        for(let j = 0; j < s.length; j++) if(s[i] === s[j]) cnt++;
        if(cnt === 1) answer += s[i];
    }
    
    let temp = [];
    temp = answer.split('');
    temp.sort();
    answer = temp.join('');
    
    return answer;
}