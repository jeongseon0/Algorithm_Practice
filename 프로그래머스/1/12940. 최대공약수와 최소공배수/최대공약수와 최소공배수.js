function solution(n, m) {
    var answer = [];
    
    const max = Math.max(n, m);
    const min = Math.min(n, m);
    let i;
    
    for(i = 0; i <= min; i++) {
        if (n % i === 0 && m % i === 0)
            answer[0] = i;
    }
    
    i = max;
    while (1) {
        if (i % n === 0 && i % m === 0) {
            answer[1] = i;
            break;
        }
        i++;
    }
    
    return answer;
}