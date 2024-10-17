function solution(num, total) {
    let answer = [];
    
    answer[0] = 0;
    for(let i = 1; i < num; i++) {
        answer[i] = answer[i-1] + 1;
    }
    
    while(1) {
        let sum = 0;
        for(let i = 0; i < num; i++) sum += answer[i];
        if(sum === total) break;
        if(sum < total) for(let i = 0; i < num; i++) answer[i]++;
        else for(let i = 0; i < num; i++) answer[i]--;
    }
    
    return answer;
}