function solution(todo_list, finished) {
    let answer = [];
    
    for(let i = 0; i < todo_list.length; i++) {
        if(finished[i] === false) answer[answer.length] = todo_list[i];
    }
    
    return answer;
}