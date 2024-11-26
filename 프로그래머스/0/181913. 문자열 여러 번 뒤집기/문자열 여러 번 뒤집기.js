function solution(my_string, queries) {
    let answer = '';
    
    for(let query of queries) {
        answer = '';
        for(let i = 0; i < query[0]; i++) answer += my_string[i];
        for(let i = query[1]; i >= query[0]; i--) answer += my_string[i];
        for(let i = query[1]+1; i < my_string.length; i++) answer += my_string[i];
        my_string = [...answer];
    }
    
    return answer;
}