function solution(number, limit, power) {
    let answer = 0;
    let arr = [];
    
    for (let i = 1; i <= number; i++) arr.push(i);
    
    for (let num of arr) {
        let sqrt = Math.floor(Math.sqrt(num));
        let cnt = 0;
        let isSquare = false;
        for(let i = 1; i <= sqrt; i++) {
            if (num % i === 0) cnt++;
            if (num / i === i) isSquare = true;
        }
        if (isSquare) cnt = cnt * 2 - 1;
        else cnt *= 2;
        
        if (cnt > limit) cnt = power;
        answer += cnt;
    }
    
    
    
    
    // console.log(sqrt);
    // console.log(arr);
    
    
    return answer;
}