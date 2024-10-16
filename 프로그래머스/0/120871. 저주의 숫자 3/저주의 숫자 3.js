function solution(n) {
    let answer = 1;
    let i = 1;
    
    while(i <= n) {
        let three = answer.toString();
        if(three.includes('3') || answer % 3 === 0) answer++;
        else {
            if(i === n) break;
            answer++;
            i++;
        }
    }
    
    return answer;
}