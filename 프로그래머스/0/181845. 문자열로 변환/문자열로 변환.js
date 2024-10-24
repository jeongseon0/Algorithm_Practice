function solution(n) {
    let answer = '';
    let temp = [];
    
    // answer = n.toString();
    
    while(n > 0) {        
        temp.unshift((n%10).toString());
        n = Math.trunc(n/10);
    }
    
    answer = temp.join('');
    
    return answer;
}