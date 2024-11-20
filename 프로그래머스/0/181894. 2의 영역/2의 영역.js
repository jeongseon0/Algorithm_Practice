function solution(arr) {
    let answer = [];
    let idx = [-1, -1];   // [start, end];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 2 && idx[0] < 0) idx[0] = i;
        else if(arr[i] === 2 && idx[0] >= 0) idx[1] = i;
    }
    
    console.log(idx);
    
    if(idx[0] === -1) return [-1];
    if(idx[1] === -1) return [2];
    
    for(let i = idx[0]; i <= idx[1]; i++) answer.push(arr[i]);
    
    return answer;
}