function solution(a, b) {
    let answer = 2;
    let i = 1;
    
    while(1) {
        if(b % 2 !== 0 && b % 5 !== 0) break; 
        if(b % 2 === 0) b = b / 2;
        if(b % 5 === 0) b = b / 5;
    }
    
    if(a % b === 0) answer = 1;
    
    return answer;
}