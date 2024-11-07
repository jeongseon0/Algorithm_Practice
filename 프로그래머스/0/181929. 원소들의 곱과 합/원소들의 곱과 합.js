function solution(num_list) {
    let answer = 0;
    let sum = 0, mul = 1;
    
    for(let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
        mul *= num_list[i];
    }
    
    if(mul < sum * sum) answer = 1;
    
    return answer;
}