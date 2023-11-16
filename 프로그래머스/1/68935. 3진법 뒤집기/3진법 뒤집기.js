function solution(n) {
    let answer = 0;
    let arr = [];
    
    let i = 0;
    for (i = 0; ; i++) if (3 ** i > n) break;
    i--;
    
    while (i > -1) {
        let j = Math.floor(n / (3 ** i));
        arr.unshift(j);
        n -= (3 ** i) * j;
        i--;
    }
    for(let j = 0; j < arr.length; j++) {
        answer += arr[arr.length - 1 - j] * (3 ** j);
        console.log(answer);
    }
    return answer;
}