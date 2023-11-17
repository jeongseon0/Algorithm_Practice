function solution(price, money, count) {
    let answer = -1;
    let p_sum = 0;
    
    for (let i = 1; i <= count; i++) p_sum += price * i;
    
    (p_sum > money) ? answer = p_sum - money : answer = 0;
    
    return answer;
}