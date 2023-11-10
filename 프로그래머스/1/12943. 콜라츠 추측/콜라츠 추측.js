function solution(num) {
    var answer = 0;
    
    let cnt = 500;
    while (num !== 1) {
        if (cnt === 0) return -1;
        if (num % 2 === 0) num /= 2;
        else num = num * 3 + 1;
        answer++;
        cnt--;
    }
    
    return answer;
}