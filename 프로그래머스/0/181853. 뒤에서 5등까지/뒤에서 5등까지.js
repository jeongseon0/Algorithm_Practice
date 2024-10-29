function solution(num_list) {
    let answer = [];
    
    num_list.sort(function(a, b) {
        return a- b;
    });
    
    for(let i = 0; i < 5; i++) {
        answer[i] = num_list[i];
    }
    
    return answer;
}