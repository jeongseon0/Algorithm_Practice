function solution(s) {
    let answer = '';
    let arr = s.split('');
    console.log(arr);
    
    arr = arr.sort((a, b) => a > b ? -1 : 1 );
    
    console.log(arr);
    
    answer = arr.join('');
    
    return answer;
}