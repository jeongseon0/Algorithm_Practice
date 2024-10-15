function solution(before, after) {
    let answer = 0;
    let i = 0;
    
    while(i < after.length){
        if(before.includes(after[i])) before = before.replace(after[i],'');
        i++;
    }
    
    if(!before.length) answer = 1;
    
    return answer;
}