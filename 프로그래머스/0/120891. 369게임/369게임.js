function solution(order) {
    let answer = 0;
    
    while(order > 0){
        let n = order % 10;
        if(n === 3 || n === 6 || n === 9) answer++;
        order = Math.trunc(order/10);
    }
    
    return answer;
}