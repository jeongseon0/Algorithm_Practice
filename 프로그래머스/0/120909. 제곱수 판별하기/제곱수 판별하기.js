function solution(n) {
    let answer = 2;
    let i = 0;
    
    while(i * i <= n){
        if (i * i === n) answer = 1;
        i++;
    }
    
    return answer;
}