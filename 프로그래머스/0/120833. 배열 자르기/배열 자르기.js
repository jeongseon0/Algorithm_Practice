function solution(numbers, num1, num2) {
    let answer = [];
    
    // answer = numbers.slice(num1, num2 + 1);
    
    for (let i = num1; i <= num2; i++){
        answer[i - num1] = numbers[i];
    }
    
    return answer;
}