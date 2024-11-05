function solution(names) {
    let answer = [];
    
    for(let i = 0; i < names.length; i = i + 5) {
        answer[answer.length] = names[i];
    }
    
    
    return answer;
}