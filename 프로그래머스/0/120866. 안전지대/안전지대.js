function solution(board) {
    let answer = 0;
    let spot = [[]];
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === 1) {
                for(let n = i-1; n <= i+1; n++) {
                    if(n < 0) continue;
                    if(n >= board.length) break;
                    for(let m = j-1; m <= j+1; m++) {
                        if(m < 0) continue;
                        if(m >= board[i].length) break;
                        if(board[n][m] === 0) board[n][m] = 2;
                    }
                }
            }
        }
    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(board[i][j] === 0) answer++;
        }
    }
    
    
    return answer;
}