function solution(number) {
    let answer = 0;
    let temp = [];
    temp = number.split('');
    
    for(let i = 0; i < temp.length; i++) answer += parseInt(temp[i]);
    answer = answer % 9;
    
    return answer;
}