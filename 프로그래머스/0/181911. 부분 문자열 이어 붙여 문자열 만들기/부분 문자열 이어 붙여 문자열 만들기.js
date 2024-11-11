function solution(my_strings, parts) {
    let answer = '';
    
    for(let i = 0; i < parts.length; i++) {
        for(let j = parts[i][0]; j <= parts[i][1]; j++) {
            answer += my_strings[i][j];
        }
    }
    
    
    return answer;
}