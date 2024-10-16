function solution(sides) {
    let answer = 0;
    
    let a, b;
    if(sides[0] >= sides[1]) {
        a = sides[0];
        b = sides[1];
    }
    else {
        a = sides[1];
        b = sides[0];
    }
    
    for(let i = 1; i < a + b; i++) {
        if(a >= i && a < i + b) answer++;
        else if(i >= a && i < a + b) answer++;
    }
        
    
    return answer;
}