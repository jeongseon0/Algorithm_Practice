function solution(rank, attendance) {
    let answer = 0;
    let candidate = [];
    
    for(let i = 0; i < rank.length; i++) {
        if(attendance[i]) candidate.push(rank[i]);
    }
    
    candidate = candidate.sort(function(a, b) {return a - b;}).slice(0, 3);
    
    for(let i = 0; i < candidate.length; i++) {
        for(let j = 0; j < rank.length; j++) {
            if(candidate[i] === rank[j]) answer = answer * 100 + j;
        }
    }
    
    
    return answer;
}