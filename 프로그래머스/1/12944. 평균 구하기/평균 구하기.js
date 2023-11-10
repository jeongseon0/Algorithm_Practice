function solution(arr) {
    var answer = 0;
    
    for (const e of arr) answer += e;
    
    answer /= arr.length;
    
    return answer;
}