function solution(numbers) {
    var answer = 0;
    const length = numbers.length;
    let sum = 0;
    
    for (let number of numbers){
        sum += number;
    }
    
    answer = sum / length;
    
    temp = Math.floor(answer);
    
    if ((answer - temp) >= 0.5) answer = temp + 0.5;
    else answer = temp;
    
    return answer;
}