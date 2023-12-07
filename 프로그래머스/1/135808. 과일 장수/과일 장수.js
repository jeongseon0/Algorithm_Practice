function solution(k, m, score) { // k 최고점, m 사과갯수, score p * m (p 최하점)
    let answer = 0;
    
    score.sort(function(a, b) { return a - b; });
    
    let wrap = [];
    while (score.length) {
        wrap.push(score.pop());
        if (wrap.length === m) {
            answer += wrap[m - 1] * m;
            wrap = [];
        }
    }
    
    return answer;
}