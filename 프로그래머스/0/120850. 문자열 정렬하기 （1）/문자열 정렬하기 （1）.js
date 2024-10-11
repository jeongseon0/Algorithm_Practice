function solution(my_string) {
    let answer = [];
    let temp_arr = [];
    
    temp_arr = my_string.split('');
    
    for(let i = 0; i < temp_arr.length; i++){
        if(temp_arr[i] >= '0' && temp_arr[i] <= '9')
            answer[answer.length] = parseInt(temp_arr[i]);
    }
    
    for (let i = 0; i < answer.length - 1; i++) {
        for (let j = i + 1; j < answer.length; j++) {
            if (answer[i] > answer[j]) {
                let temp = answer[i];
                answer[i] = answer[j];
                answer[j] = temp;
            }
        }
    }
    
    return answer;
}