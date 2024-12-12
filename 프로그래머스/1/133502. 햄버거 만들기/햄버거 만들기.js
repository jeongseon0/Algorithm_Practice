function solution(ingredient) {
    let answer = 0;
    const hamburger = "1231";
    const stack = [];
    
    for(let i of ingredient) {
        stack.push(i);
        
        if(stack.length >= 4) {
            const element = stack.slice(-4).join('');
            if(element === hamburger) stack.splice(-4), answer++;
        }
    }
    
    return answer;
}