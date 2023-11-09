function solution(s1, s2) {
    var answer = 0;
    
    let cnt = 0;
    
    for (let i = 0; i < s1.length; i++){
        let same = false;
        for (let j = 0; j < s2.length; j++) if (s1[i] === s2[j]) same = true;
        if (same === true) cnt++;
    }
    
    answer = cnt;
    return answer;
}