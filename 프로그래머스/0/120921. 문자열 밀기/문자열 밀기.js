function solution(A, B) {
    let answer = 0;
    
    while(answer < A.length) {
        if(A === B) break;
        
        let tempA = [];
        tempA = A.split('');
        
        let a = tempA[tempA.length-1];
        for(let i = tempA.length-1; i > 0; i--) {
            tempA[i] = tempA[i-1];
        }
        tempA[0] = a;
        A = tempA.join('');
        
        answer++;
    }
    
    if(A !== B) answer = -1;
    
    return answer;
}