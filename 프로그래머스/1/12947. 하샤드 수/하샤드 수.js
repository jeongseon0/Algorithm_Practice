function solution(x) {
    var answer = true;
    
    let sum = 0;
    let temp = x;

    while (temp > 0) {
        sum += Math.floor(temp % 10);
        temp = temp / 10;
    }
    
    if (x % sum !== 0) answer = false;
    
    return answer;
}