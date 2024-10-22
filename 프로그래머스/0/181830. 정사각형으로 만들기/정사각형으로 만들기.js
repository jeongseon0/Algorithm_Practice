function solution(arr) {
    let answer = [[]];
    let i_length = arr.length, j_length = arr[0].length;
    
    if(i_length > j_length) {
        for(let i = 0; i < i_length; i++) {
            for(let j = j_length; j < i_length; j++) arr[i][j] = 0;
        }
    }
    else {
        for(let i = i_length; i < j_length; i++) {
            arr[i] = [];
            for(let j = 0; j < j_length; j++) arr[i][j] = 0;
        }
    }
    
    answer = arr;
    
    return answer;
}