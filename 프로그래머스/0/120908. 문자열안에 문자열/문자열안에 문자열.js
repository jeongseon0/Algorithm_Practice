function solution(str1, str2) {
    let answer = 2;
    let j = 0;
    
    for(let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[0]){
            for(j = 1; j < str2.length; j++){
                if(str1[i + j] !== str2[j]) break;
            }
            if(j === str2.length){
                answer = 1;
                break;
            }
        }
    }
    
    return answer;
}