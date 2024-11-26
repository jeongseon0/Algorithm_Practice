function solution(my_string, overwrite_string, s) {
    let answer = '';
    
    for(let i = 0; i < s; i++) answer += my_string[i];
    for(let i = 0; i < overwrite_string.length; i++) answer += overwrite_string[i];
    for(let i = answer.length; i < my_string.length; i++) answer += my_string[i];
    
    return answer;
}