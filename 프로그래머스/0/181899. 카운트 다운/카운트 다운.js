function solution(start_num, end_num) {
    let answer = [];
    
    for(let i = start_num, j = 0; i >= end_num; i--, j++) {
        answer[j] = i;
    }
    
    return answer;
}