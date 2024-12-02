function solution(dartResult) {
    let answer = 0;
    let score = [];
    let temp = 0;
    
    // S: single, D: double, T: triple
    // '*': 스타상(해당 점수와 직전 점수 각 2배, 처음 점수일 경우 해당 점수만 2배, 중첩 가능 -> 4배)
    // '#': 아차상(해당 점수 마이너스, 스타상과 중첩 가능 -> -2배)
    
    for(let i = 0; i < dartResult.length; i++) {
        if(dartResult[i] >= '0' && dartResult[i] <= '9') {
            if(dartResult[i] === '1' && dartResult[i+1] === '0' ) temp = 10, i++;
            else temp = Number(dartResult[i]);
        }
        else if(dartResult[i] === 'S') score.push(temp);
        else if(dartResult[i] === 'D') score.push(temp ** 2);
        else if(dartResult[i] === 'T') score.push(temp ** 3);
        else if(dartResult[i] === '*') {
            if(score.length >= 2) score[score.length-2] = score[score.length-2] * 2;
            score[score.length-1] = score[score.length-1] * 2;
        }
        else if(dartResult[i] === '#') score[score.length-1] = score[score.length-1] * -1;
            
    }
    
    for(let num of score) answer += num;
    
    return answer;
}