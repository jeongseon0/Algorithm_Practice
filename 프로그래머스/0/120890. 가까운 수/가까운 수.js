function solution(array, n) {
    let answer = 0;
    let sub = 101;
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] === n) {
            answer = array[i];
            break;
        }
        else if(array[i] > n && array[i] - n < sub) {
            sub = array[i] - n;
            answer = array[i];
        }
        else if(array[i] < n && n - array[i] < sub) {
            sub = n - array[i];
            answer = array[i];
        }
        else if(array[i] - n === sub || n - array[i] === sub) {
            array[i] < answer ? answer = array[i] : answer = answer;
        }
    }
    
    return answer;
}