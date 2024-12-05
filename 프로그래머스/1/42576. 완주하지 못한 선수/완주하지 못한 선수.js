function solution(participant, completion) {
    let answer = '';
    let runner = {};
    
    for(let p of participant) runner[p] = (runner[p] ? runner[p] + 1 : 1);
    
    for(let c of completion) {
        if(runner[c] > 1) runner[c]--;
        else delete runner[c];
    }
    
    answer = Object.keys(runner)[0];
    
    return answer;
}