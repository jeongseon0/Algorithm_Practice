function solution(s, skip, index) {
    let answer = '';
    
    for(let element of s) {
        let i = 0;
        let temp = element.charCodeAt();
        while(i < index) {
            if(temp >= 'z'.charCodeAt()) temp = temp - ('z'.charCodeAt() - 'a'.charCodeAt()) - 1;
            temp++ ;
            if(skip.includes(String.fromCharCode(temp))) continue;
            i++;
        }
        answer += String.fromCharCode(temp);
    }
    
    return answer;
}