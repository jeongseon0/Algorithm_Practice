function solution(arr, queries) {
    let answer = arr;
    
    for(let query of queries) {
        let temp = answer[query[0]];
        answer[query[0]] = answer[query[1]];
        answer[query[1]] = temp;
    }
    
    return answer;
}