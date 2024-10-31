function solution(my_string, alp) {
    let answer = '';
    let temp = [];
    temp = my_string.split('');
    
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] === alp) temp[i] = temp[i].toUpperCase();
    }
    
    answer = temp.join('');
    
    return answer;
}