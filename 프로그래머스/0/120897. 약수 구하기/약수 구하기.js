function solution(n) {
    let answer = [];
    
    for(let i = 1; i <= n; i++){
        if (n % i === 0) answer[answer.length] = i;
    }
    
    return answer;
}