function solution(arr) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i]; j++) {
            answer[answer.length] = arr[i];
        }
    }
    
    
    return answer;
}