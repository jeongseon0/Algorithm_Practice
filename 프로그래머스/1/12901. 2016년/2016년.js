function solution(a, b) {
    let answer = '';
    
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let lastday = 4; // week[5];
    
    for (let i = 0; i < a - 1; i++) lastday += month[i];
    lastday += b;
    lastday = Math.floor(lastday % 7);
    
    answer = week[lastday];
    
    
    
    return answer;
}