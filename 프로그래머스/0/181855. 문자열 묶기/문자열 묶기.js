function solution(strArr) {
    let answer = 0;
    let cnt = [[]];
    
    for(let str of strArr) {
        let len = str.length;
        let i;
        for(i = 0; i < cnt.length; i++) {
            if(cnt[i][0] === len) {
                cnt[i][1]++;
                break;
            }
        }
        if(i === cnt.length) cnt.push([len,1]);
    }
    
    for(let i of cnt) if(i[1] > answer) answer = i[1];
    
    return answer;
}