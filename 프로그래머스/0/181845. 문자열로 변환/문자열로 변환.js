function solution(n) {
    let answer = '';
    let index = 10000;
    
    answer = n.toString();
    
//     while(n > 10) {
//         console.log(n, index, answer);
//         if(Math.trunc(n / index) === 0) {
//             index /= 10;
//             continue;
//         }
//         answer += Math.trunc(n / index).toString();
//         n = n % index;
//         console.log(n, index, answer);
//     }
    
//     if(n > 0) answer += n.toString();
//     console.log(n, index, answer);
    
    return answer;
}