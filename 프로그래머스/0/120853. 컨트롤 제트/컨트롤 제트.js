function solution(s) {
    let answer = 0;
    
    let array = [];
    array = s.split(' ');
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 'Z') answer -= parseInt(array[i-1]);
        else answer += parseInt(array[i]);
    }
    
    
    return answer;
}