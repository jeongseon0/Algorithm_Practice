function solution(k, score) {
    let answer = [];
    let sortArry = [];
    
    for(let i = 0; i < score.length; i++) {
        sortArry.push(score[i]);
        sortArry = sortArry.sort(function(a, b) { return a - b; });
        
        if (sortArry.length > k)
            sortArry.shift();
        
        answer.push(sortArry[0]);
    }
    
    return answer;
}