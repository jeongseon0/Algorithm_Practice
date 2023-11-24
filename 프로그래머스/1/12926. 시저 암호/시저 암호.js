function solution(s, n) {
    let answer = '';

    for(let i = 0; i < s.length; i++) {
        beforeCaesar = String.fromCharCode(s.charCodeAt(i));
        afterCaesar = String.fromCharCode(s.charCodeAt(i) + n);
        aroundCaesar = String.fromCharCode(s.charCodeAt(i) + n - 26);
        
        if (beforeCaesar === ' ') {
            answer += ' ';
            continue;
        }
        if (beforeCaesar <= 'A' || beforeCaesar <= 'Z')
            afterCaesar > 'Z' ? answer+= aroundCaesar : answer+= afterCaesar;
        else if (beforeCaesar <= 'a' || beforeCaesar <= 'z')
            afterCaesar > 'z' ? answer+= aroundCaesar : answer+= afterCaesar;
                                           
    }
    console.log(answer);

    return answer;
}