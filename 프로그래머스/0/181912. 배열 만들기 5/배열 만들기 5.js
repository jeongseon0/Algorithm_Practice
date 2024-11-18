function solution(intStrs, k, s, l) {
    let answer = [];
    
    for(let str of intStrs) {
        let num = 0;
        for(let i = s; i < s+l; i++) {
            num *= 10;
            num += parseInt(str[i]);
        }
        if(num > k) answer.push(num);
    }
    
    return answer;
}