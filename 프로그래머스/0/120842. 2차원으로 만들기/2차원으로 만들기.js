function solution(num_list, n) {
    let answer = [[]];
    let length = num_list.length / n;
    let k = 0;
    
    for(let i = 0; i < length; i++){
        answer[i] = [];
        for(let j = 0; j < n; j++) answer[i][j] = num_list[i+j+k];
        k += n - 1;
    }
    
    return answer;
}