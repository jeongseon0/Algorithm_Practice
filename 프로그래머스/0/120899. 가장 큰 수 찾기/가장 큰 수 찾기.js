function solution(array) {
    let answer = [];
    
    answer[0] = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (answer[0] < array[i]){
            answer[0] = array[i];
            answer[1] = i;
        }
    }
    
    return answer;
}