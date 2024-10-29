function solution(num_list) {
    let answer = [];
    
    num_list.sort(function (a, b) {
        return a - b;
    });
    
    for(let i = 5; i < num_list.length; i++) {
        answer[answer.length] = num_list[i];
    }
    
    
    return answer;
}