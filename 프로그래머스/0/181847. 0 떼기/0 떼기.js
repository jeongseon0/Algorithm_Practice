function solution(n_str) {
    let answer = '';
    let i = 0;
    
    while(n_str[i] === '0') {
        i++;
    }
    
    for(let j = i; j < n_str.length; j++) {
        answer += n_str[j];
    }
    
    return answer;
}