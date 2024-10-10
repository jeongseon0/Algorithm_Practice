function solution(n, numlist) {
    let answer = [];
    let j = 0;
    
    for (let i = 0; i < numlist.length; i++) {
        if (numlist[i] % n === 0) {
            answer[j] = numlist[i];
            j++;
        }
    }
    
    return answer;
}