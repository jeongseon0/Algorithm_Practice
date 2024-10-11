function solution(my_string) {
    let answer = '';
    let temp_str = [];
    temp_str = my_string.split('');
    
    for(let i = 0; i < temp_str.length; i++){
        if (temp_str[i] === 'a' || temp_str[i] === 'e'
            || temp_str[i] === 'i' || temp_str[i] === 'o' || temp_str[i] === 'u')
            temp_str[i] = '';
    }
    
    answer = temp_str.join('');
    
    return answer;
}