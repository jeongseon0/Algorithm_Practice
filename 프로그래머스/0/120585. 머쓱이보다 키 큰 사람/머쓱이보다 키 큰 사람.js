function solution(array, height) {
    let answer = 0;
    
    array.forEach((classmate) => {
        if(classmate > height) answer++;
    })
    
    return answer;
}