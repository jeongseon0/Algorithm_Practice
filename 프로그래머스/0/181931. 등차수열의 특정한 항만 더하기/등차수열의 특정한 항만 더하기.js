function solution(a, d, included) {
    let answer = 0;
    let seq = a;
    
    if(included[0]) answer = a;
    for(let i = 1; i < included.length; i++) {
        seq += d;
        if(included[i]) answer += seq;
    }
    
    return answer;
}