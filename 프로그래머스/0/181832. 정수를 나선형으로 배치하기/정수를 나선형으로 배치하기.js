function solution(n) {
    let answer = [[]];
    let num = 1;
    
    let a = 0, b = 0;
    for(let i = 0; i < n; i++) answer[i] = [];
    while(1) {
        if(num > n * n) break;
        for(let j = b; j < n-b; j++) {
            answer[a][j] = num;
            num++;
        }
        a++;
        for(let i = a; i <= n-a; i++) {
            answer[i][n-b-1] = num;
            num++;
        }
        b++;
        for(let j = n-b-1; j >= b-1; j--) {
            answer[n-a][j] = num;
            num++;
        }
        for(let i = n-a-1; i >= a; i--) {
            answer[i][b-1] = num;
            num++;
        }
    }
    
    return answer;
}