function solution(n) {
    let answer = [];
    
    let div = 2;
    
    while(n > 1) {
        if(n % div === 0) {
            n /= div;
            if (!answer.includes(div)) answer[answer.length] = div;
            continue;
        }
        else div++;
    }
    
    return answer;
}