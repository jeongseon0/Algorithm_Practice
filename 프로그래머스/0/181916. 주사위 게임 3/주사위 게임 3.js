function solution(a, b, c, d) {
    let answer = 0;
    let dice = [a, b, c, d].reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    }, {});
    
    const diceValue = Object.keys(dice).sort((a, b) => dice[b] - dice[a]);
    
    if(dice[diceValue[0]] === 4) answer = parseInt(diceValue[0]) * 1111;
    else if(dice[diceValue[0]] === 3) 
        answer = (10 * parseInt(diceValue[0]) + parseInt(diceValue[1])) ** 2;
    else if(dice[diceValue[0]] === 2 && dice[diceValue[1]] === 2)
        answer = (parseInt(diceValue[0]) + parseInt(diceValue[1])) * Math.abs(parseInt(diceValue[0]) - parseInt(diceValue[1]));
    else if(dice[diceValue[0]] === 2) answer = parseInt(diceValue[1]) * parseInt(diceValue[2]);
    else answer = parseInt(diceValue[0]);
    
    return answer;
}