function solution(my_string) {
    let answer = Array.from({length:52},() => 0);
    const A = 'A'.charCodeAt();
    const Z = 'Z'.charCodeAt();
    const a = 'a'.charCodeAt();
    
    for(let spell of my_string) {
        const idx = spell.charCodeAt();
        if(idx <= Z) answer[idx-A]++;
        else answer[idx-(A+(a-Z))+1]++;
    }
    
    return answer;
}