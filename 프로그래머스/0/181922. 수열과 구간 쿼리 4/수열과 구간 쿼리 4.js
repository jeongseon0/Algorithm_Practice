function solution(arr, queries) {
    let answer = arr;
    
    for(let query of queries) {
        for(let i = query[0]; i <= query[1]; i++) {
            if(i % query[2] === 0) answer[i]++;
        }
    }
    
    return answer;
}