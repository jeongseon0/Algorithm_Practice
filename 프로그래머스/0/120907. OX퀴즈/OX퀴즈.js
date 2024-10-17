function solution(quiz) {
    let answer = [];
    
    for(let i = 0; i < quiz.length; i++) {
        let temp = [];
        temp = quiz[i].split(' ');
        if(temp[1] === '+') {
            if(parseInt(temp[0]) + parseInt(temp[2]) === parseInt(temp[4])) answer[i] = 'O';
            else answer[i] = 'X';
        }
        else if(temp[1] === '-') {
            if(parseInt(temp[0]) - parseInt(temp[2]) === parseInt(temp[4])) answer[i] = 'O';
            else answer[i] = 'X';
        }
    }
    
    return answer;
}