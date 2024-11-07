function solution(num_list) {
    let answer = [];
    let len = num_list.length;
    
    if(num_list[len-1] > num_list[len-2])
        num_list[len] = num_list[len-1] - num_list[len-2];
    else num_list[len] = num_list[len-1] * 2;
    
    answer = num_list;
    
    return answer;
}