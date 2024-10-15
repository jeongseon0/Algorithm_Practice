function solution(my_string) {
    let answer = 0;
    
    for(let i = 0; i < my_string.length; i++) {
        let temp = '';
        if(my_string[i] >= '0' && my_string[i] <= '9') {
            while(1) {
                temp += my_string[i];
                i++;
                if (!(my_string[i] >= '0' && my_string[i] <= '9')) break;
            }
        }
        if(parseInt(temp) > 0) answer += parseInt(temp);
    }
    
    return answer;
}