function solution(num_list) {
    let answer = 0;
    let sum_odd = 0, sum_even = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if ((i+1) % 2 !== 0) sum_odd += num_list[i];
        else sum_even += num_list[i];
    }
    
    sum_odd >= sum_even ? answer = sum_odd : answer = sum_even;
    
    return answer;
}