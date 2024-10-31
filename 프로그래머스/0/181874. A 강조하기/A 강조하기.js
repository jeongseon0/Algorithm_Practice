function solution(myString) {
    let answer = '';
    let temp = [];
    temp = myString.split('');
    
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] === 'a' || temp[i] === 'A') temp[i] = temp[i].toUpperCase();
        else temp[i] = temp[i].toLowerCase();
    }
    
    answer = temp.join('');
    
    return answer;
}