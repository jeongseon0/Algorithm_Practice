function solution(n) {
    let answer = 1;
    
    while(n > 0){
        if(n / answer <= answer) break;
        n = Math.trunc(n / answer);
        answer++;
    }
    
    return answer;
}