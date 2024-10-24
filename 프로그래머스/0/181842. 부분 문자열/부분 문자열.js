function solution(str1, str2) {
    let answer = 0;
    
    // if(str2.includes(str1)) answer = 1;
    
    for(let i = 0; i <= str2.length - str1.length; i++) {
        if(str2[i] === str1[0]) {
            let j;
            for(j = 1; j < str1.length; j++) {
                if(str2[i+j] !== str1[j]) break;
            }
            if(j === str1.length) answer = 1;
        }
    }
    
    return answer;
}