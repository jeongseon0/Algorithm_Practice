function solution(order) {
    let answer = 0;
    
    for (let od of order) {
        if(od.includes("latte")) answer += 5000;
        else answer += 4500;
    }
    
    return answer;
}