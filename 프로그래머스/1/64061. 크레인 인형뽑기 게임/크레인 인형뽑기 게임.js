function solution(board, moves) {
    let answer = 0;
    const stack = [];
    
    for(let j of moves) {
        for(let i = 0; i < board.length; i++) {
            if(board[i][j-1] !== 0) {
                if(stack[stack.length-1] === board[i][j-1]) stack.pop(), answer += 2;
                else stack.push(board[i][j-1]);
                board[i][j-1] = 0;
                break;
            }
            else continue;
        }
    }
    
    return answer;
}