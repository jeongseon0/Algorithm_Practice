function solution(ineq, eq, n, m) {
    let answer = 0;
    
    if(ineq === '>') {
        if(eq === '=') answer = (n >= m);
        else answer = (n > m);
    }
    else {
        if(eq === '=') answer = (n <= m);
        else answer = (n < m);
    }
    
    answer ? answer = 1 : answer = 0;
    
    return answer;
}