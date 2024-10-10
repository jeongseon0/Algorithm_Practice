function solution(slice, n) {
    let answer = 1;
    
    while (Math.trunc((slice * answer) / n < 1)) answer++;
    
    
    return answer;
}