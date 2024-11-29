function solution(n) {
    const prime = Array.from({length: n + 1}, () => true);
    let answer = n - 1;
    
    for(let i = 2; i < Math.sqrt(n); i++) 
        if(prime[i]) 
            for(let j = i ** 2; j <= n; j += i) 
                if(prime[j]) answer--, prime[j] = false;
    
    return answer;
}