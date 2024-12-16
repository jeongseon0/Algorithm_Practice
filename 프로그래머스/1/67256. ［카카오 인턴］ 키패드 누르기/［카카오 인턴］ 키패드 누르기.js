function distance(start, end) {
    const keypad = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['*', '0', '#']];
    let s = [0, 0];
    let e = [0, 0];
    
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 3; j++) {
            if(keypad[i][j] == start) s = [i, j];
            else if(keypad[i][j] == end) e =  [i, j];
        }
    }
    // console.log(s, end, Math.abs(s[0] - e[0]) + Math.abs(s[1] - e[1]));
    return Math.abs(s[0] - e[0]) + Math.abs(s[1] - e[1]);
}

function solution(numbers, hand) {
    let answer = '';
    let left = '*';
    let right = '#';
    
    for(let number of numbers) {
        // console.log(left, right, number);
        if(number == left) answer += 'L';
        else if(number == right) answer += 'R';
        else if(number === 1 || number === 4 || number === 7) answer += 'L', left = String(number);
        else if(number === 3 || number === 6 || number === 9) answer += 'R', right = String(number);
        else {
            let dL = distance(number, left);
            let dR = distance(number, right);
            if(dL < dR) answer += 'L', left = String(number);
            else if(dL > dR) answer += 'R', right = String(number);
            else {
                if(hand === 'left') answer += 'L', left = String(number);
                else answer += 'R', right = String(number);
            }
        }
        // console.log(answer);
    }
    
    return answer;
}