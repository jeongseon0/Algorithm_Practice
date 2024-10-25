function solution(n_str) {
    let answer = 0;
    
    // answer = parseInt(n_str);
    
    let n_arr = [];
    n_arr = n_str.split('');
    
    while(n_arr.length > 0) {
        let temp = n_arr.shift();
        answer = answer * 10 + parseInt(temp);
    }
    
    return answer;
}