function solution(arr, delete_list) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        let is_include = 0;
        for(let j = 0; j < delete_list.length; j++) {
            if(arr[i] === delete_list[j]) is_include = 1;
        }
        if(!is_include) answer.push(arr[i]);
    }
    
    return answer;
}