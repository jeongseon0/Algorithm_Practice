function solution(my_string, n) {
    let answer = '';
    
    // answer = my_string.slice(my_string.length-n, my_string.length);
    
    for(let i = my_string.length-n; i < my_string.length; i++) {
        answer += my_string[i];
    }
    
    return answer;
}