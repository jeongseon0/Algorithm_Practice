function solution(l, r) {
    let answer = [];

    for(let i = l; i <= r; i++) {
        let num = i.toString().split('');
        for(let j = num.length-1; j >= 0 ; j--) {
            if(num[j] === '0' || num[j] === '5') num.pop();
            else break;
        }
        if(!num.length) answer.push(i);
    }
    if(!answer.length) answer = [-1];
    
    return answer;
}