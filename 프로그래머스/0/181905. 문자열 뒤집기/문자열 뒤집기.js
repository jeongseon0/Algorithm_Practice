function solution(my_string, s, e) {
    let answer = '';
    let len = my_string.length;
    
    for(let i = 0; i < s; i++) answer += my_string[i];
    for(let i = e; i >= s; i--) answer += my_string[i];
    for(let i = e+1; i < len; i++) answer += my_string[i];
    
    
    return answer;
}