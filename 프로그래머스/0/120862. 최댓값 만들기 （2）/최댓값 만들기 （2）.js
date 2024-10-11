function solution(numbers) {
    let answer = -1000000001;
    
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if (answer < numbers[i] * numbers[j])
                answer = numbers[i] * numbers[j];
        }
    }
    
    return answer;
}