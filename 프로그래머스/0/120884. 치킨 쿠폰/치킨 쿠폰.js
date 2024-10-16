function solution(chicken) {
    let answer = 0;
    
    while(chicken >= 10) {
        let coupon = 0;
        coupon += Math.trunc(chicken/10);
        answer += coupon;
        chicken = (chicken % 10) + coupon;
    }
    
    return answer;
}