function solution(n, m, section) {  // n 벽 길이, m 롤러 길이, section 칠해야하는 벽의 칸
    let answer = 0;
    
    let wall = new Array(n).fill('o');
    for (e of section) wall[e - 1] = 'x';
    
    for (let i = 0; i < n; i++) {
        if (wall[i] === 'x') {
            for (let j = 0; j < m; j++) wall[i + j] = 'o';
            answer++;
        }
    }
    
    console.log(wall);
    
    return answer;
}