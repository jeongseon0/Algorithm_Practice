function solution(arr, k) {
    let answer = [];
    
    for(let num of arr) {
        if(answer.length === k) break;
        if(!answer.includes(num)) answer.push(num);
    }
    
    if(answer.length < k) {
        for(let i = answer.length; i < k; i++) answer.push(-1);
    }
    
    return answer;
}