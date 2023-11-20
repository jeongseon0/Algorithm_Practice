function solution(s) {
    var answer = true;
    let arr = [];
    
    arr = s.split('');
    
    if (arr.length !== 4 && arr.length !== 6) answer =  false;
    arr.forEach(e => { 
        if (e < '0' || e > '9') answer =  false;
    });
    
    return answer;
}