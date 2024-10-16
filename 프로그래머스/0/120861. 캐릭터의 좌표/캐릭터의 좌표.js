function solution(keyinput, board) {
    let answer = [0,0];
    let board_x_size = Math.trunc(board[0]/2);
    let board_y_size = Math.trunc(board[1]/2); 
    
    keyinput.forEach(key => {
        if(key === 'left') {
            answer[0]--;
            if(answer[0] < board_x_size * -1) answer[0] = board_x_size * -1;
        }
        else if(key === 'right') {
            answer[0]++;
            if(answer[0] > board_x_size) answer[0] = board_x_size;
        }
        else if(key === 'up') {
            answer[1]++;
            if(answer[1] > board_y_size) answer[1] = board_y_size;
        }
        else if(key === 'down') {
            answer[1]--;
            if(answer[1] < board_y_size * -1) answer[1] = board_y_size * -1;
        }
    })
    
    return answer;
}