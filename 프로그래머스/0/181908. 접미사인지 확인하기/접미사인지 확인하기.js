function solution(my_string, is_suffix) {
    let answer = 1;
    let i, j;
    
    if(my_string === is_suffix) return 1;
    
    for(i = my_string.length-1, j = is_suffix.length-1; j >= 0; i--, j--) {
        if(my_string[i] !== is_suffix[j]) {
            answer = 0;
            break;
        }
    }
    
    return answer;
}