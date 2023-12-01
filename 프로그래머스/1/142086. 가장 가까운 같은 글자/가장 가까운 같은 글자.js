function solution(s) {
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        let near = -1;
        for (let j = 0; j < i; j++) if (s[i] === s[j])  near = i - j;
        answer.push(near);
    }
    
    return answer;
}