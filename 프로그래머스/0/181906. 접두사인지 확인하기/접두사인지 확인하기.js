function solution(my_string, is_prefix) {
    let answer = 0;
    let i;
    
    for(i = 0; i < is_prefix.length; i++) {
        if(my_string[i] !== is_prefix[i]) break;
    }
    
    if(i === is_prefix.length) answer = 1;
    
    return answer;
}