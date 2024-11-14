function solution(arr) {
    let answer = arr;
    let len = 1;
    
    while(arr.length > len) len *= 2;
    
    for(let i = arr.length; i < len; i++) answer[i] = 0;
    
    return answer;
}