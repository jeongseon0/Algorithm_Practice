function solution(binomial) {
    let answer = 0;
    let temp = [];
    temp = binomial.split(' ');
    
    if(temp[1] === '+') answer = parseInt(temp[0]) + parseInt(temp[2]);
    else if(temp[1] === '-') answer = parseInt(temp[0]) - parseInt(temp[2]);
    else if(temp[1] === '*') answer = parseInt(temp[0]) * parseInt(temp[2]);
    
    return answer;
}