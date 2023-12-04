function solution(a, b, n) {
    let answer = 0;
    
    while (n >= a) {
        n = n - a + b;
        answer += b;
    }
    
    return answer;
}