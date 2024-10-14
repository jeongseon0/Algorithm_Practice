function solution(i, j, k) {
    let answer = 0;
    
    for(let a = i; a <=j; a++){
        x = k.toString();
        y = a.toString();
        for(let b = 0; b < y.length; b++) if(x === y[b]) answer++;
    }
    
    return answer;
}