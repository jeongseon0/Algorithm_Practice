function solution(arr, queries) {
    let answer = [];
    
    for(let query of queries) {
        let max = 1000001;
        for(let i = query[0]; i <= query[1]; i++) {
            if(arr[i] > query[2] && arr[i] < max) max = arr[i];
        }
        if(max === 1000001) max = -1;
        answer.push(max);
    }
    
    return answer;
}