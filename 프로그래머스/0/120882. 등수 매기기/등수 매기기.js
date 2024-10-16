function solution(score) {
    let answer = [];
    
    for(let i = 0; i < score.length; i++) {
        let me = (score[i][0]+score[i][1])/2;
        
        answer[i] = 1;
        for(let j = 0; j < score.length; j++) {
            let other = (score[j][0]+score[j][1])/2;
            
            if(me < other) answer[i]++;
        }
    }
    
    return answer;
}