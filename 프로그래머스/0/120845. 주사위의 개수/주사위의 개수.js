function solution(box, n) {
    let answer = 1;
    
    for (let i = 0; i < 3; i++) {
        answer *= Math.trunc(box[i] / n);
    }
    
    return answer;
}