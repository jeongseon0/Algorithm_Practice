function solution(my_string) {
    let answer = [];
    let n = 0;
    let temp = '';
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] !== ' ') temp += my_string[i];
        else {
            if(temp.length === 0) continue;
            else {
                answer[n] = temp;
                n++;
                temp = '';
            }
        }
    }
    
    if(temp.length) answer[n] = temp;
    
    return answer;
}