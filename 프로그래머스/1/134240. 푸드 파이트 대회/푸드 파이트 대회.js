function solution(food) {
    let answer = '';
    
    for(let i = 1; i < food.length; i++) {
        for(let j = 0; j < Math.floor(food[i] / 2); j++) {
            answer += i.toString();
        }
    }
    
    let re_answer = answer.split('').reverse().join('');
    
    answer = answer + '0' + re_answer;
    
    return answer;
}