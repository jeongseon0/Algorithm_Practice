function solution(my_string, target) {
    let answer = 0;
    
    // if(my_string.includes(target)) answer = 1;
    
    for(let i = 0; i <= my_string.length - target.length; i++) {
        if(my_string[i] === target[0]) {
            let j;
            for(j = 1; j < target.length; j++) {
                if(my_string[i+j] !== target[j]) break;
            }
            if(j === target.length) answer = 1;
        }
    }
    return answer;
}