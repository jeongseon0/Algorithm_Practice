function solution(s) {
    let answer = '';
    let arr = [];
    
    const center =  Math.floor(s.length / 2);
    arr = s.split('');
    
    if (s.length % 2 === 1)  arr = arr.slice(center, center + 1);
    else arr = arr.slice(center - 1, center + 1);

    answer = arr.join('');
    
    return answer;
}