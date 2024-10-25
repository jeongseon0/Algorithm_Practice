function solution(num_str) {
    let answer = 0;
    let num_arr = [];
    num_arr = num_str.split('');
    
    while(num_arr.length > 0) answer += parseInt(num_arr.pop());
    
    return answer;
}