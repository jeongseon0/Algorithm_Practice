function solution(numbers) {
    var answer = -1;
    
    for (let number of numbers){
        answer -= number;
    }
    
    answer += 46
    
    return answer;
}