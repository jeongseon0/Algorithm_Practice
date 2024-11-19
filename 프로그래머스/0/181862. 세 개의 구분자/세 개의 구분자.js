function solution(myStr) {
    let answer = [];
    let temp1 = [], temp2 = [];
    
    answer = myStr.split('a');
    
    for(let str of answer) {
        temp2 = str.split('b');
        for(let s of temp2) {
            if(s) temp1.push(s);
        }
    }
    
    answer = [];
    for(let str of temp1) {
        temp2 = str.split('c');
        for(let s of temp2) {
            if(s) answer.push(s);
        }
    }
    
    if(!answer.length) answer = ['EMPTY'];
    
    return answer;
}