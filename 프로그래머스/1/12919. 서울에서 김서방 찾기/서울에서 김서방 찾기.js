function solution(seoul) {
    let answer = '';
    
    let i = 0;
    for (i = 0; i < seoul.length; i++) if (seoul[i] === 'Kim') break;
    
    answer = '김서방은 ' + i + '에 있다';
    
    return answer;
}