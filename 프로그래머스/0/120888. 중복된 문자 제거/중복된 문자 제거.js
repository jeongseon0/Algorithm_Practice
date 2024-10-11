function solution(my_string) {
    let answer = '';
    let contains = '';
    
    for(let i = 0; i < my_string.length; i++){
        if(!contains.includes(my_string[i])){
            contains += my_string[i];
            answer += my_string[i];
        }
    }
    
    return answer;
}