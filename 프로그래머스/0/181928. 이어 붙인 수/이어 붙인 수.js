function solution(num_list) {
    let answer = 0;
    let odd = '', even = '';
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 !== 0) odd += num_list[i].toString();
        else even += num_list[i].toString();
    }
    
    answer = parseInt(odd) + parseInt(even);
    
    return answer;
}