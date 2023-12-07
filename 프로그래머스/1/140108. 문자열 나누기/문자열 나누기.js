function solution(s) {
    let answer = 0;
    
    let cnt = 0;
    let i = 0;
    
    while(i < s.length) {
        if (s[0] === s[i]) cnt++;
        else cnt--;
        
        i++;
        
        if (cnt === 0) {
            s = s.substr(i, s.length - i);
            answer++;
            i = 0;
        }
    }
    if (s.length) answer++;
    
    return answer;
}