function solution(d, budget) {
    let answer = 0;
    let list = [];
    
    d.sort(function(a, b) { return a - b; });
    
    for(let i = 0; i < d.length; i++) {
        if(answer + d[i] <= budget) {
            answer += d[i];
            list.push(d[i]);
        }
    }
    
    console.log(list);
    
    answer = list.length;
    
    return answer;
}