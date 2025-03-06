function solution(s) {
    let answer = '';
    
    s = s.split(' ');
    s[0] = parseInt(s[0]);
    
    let max = s[0], min = s[0];
    for(let i = 1; i < s.length; i++) {
        s[i] = parseInt(s[i]);
        if(s[i] > max) max = s[i];
        if(s[i] < min) min = s[i];
    }
    
    answer += min + ' ' + max; 
    
    return answer;
}