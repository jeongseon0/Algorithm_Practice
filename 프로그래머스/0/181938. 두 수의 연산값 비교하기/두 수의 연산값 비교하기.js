function solution(a, b) {
    let answer = 0;
    let aob = parseInt(a.toString() + b.toString());
    
    aob >= 2 * a * b ? answer = aob : answer = 2 * a * b;
    
    return answer;
}