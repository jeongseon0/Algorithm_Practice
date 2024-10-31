function solution(my_string) {
    let answer = [];
    
    // answer = my_string.split(' ');
    
    let n = 0;
    let temp = '';
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] !== ' ') temp += my_string[i];
        else {
            answer[n] = temp;
            n++;
            temp = '';
        }
    }
    
    if(temp.length) answer[n] = temp;
    
    return answer;
}