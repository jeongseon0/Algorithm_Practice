function solution(a, b) {
    let answer = 0;
    let aob = parseInt(a.toString() + b.toString());
    let boa = parseInt(b.toString() + a.toString());
    
    aob >= boa ? answer = aob : answer = boa;
    
    return answer;
}