function solution(num_list, n) {
    let answer = [];
    
    for(let i = n-1; i < num_list.length; i++) {
        answer[answer.length] = num_list[i];
    }
    
    return answer;
}