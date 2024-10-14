function solution(balls, share) {
    let answer = 1;
    
    let b_fac = 1, s_fac = 1, bms_fac = 1;
    
    for(let i = 1; i <= balls; i++) b_fac *= i;
    for(let i = 1; i <= share; i++) s_fac *= i;
    for(let i = 1; i <= balls - share; i++) bms_fac *= i;
    
    answer = Math.round(b_fac/(bms_fac * s_fac));
    
    if (balls === share) answer = 1;
    
     
    return answer;
}