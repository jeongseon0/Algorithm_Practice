function solution(arr) {
    let answer = [];
    
    answer.push(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] === answer[answer.length-1]) answer.pop();
        else answer.push(arr[i]);
    }
    
    if(!answer.length) answer = [-1];
    
    return answer;
}