function solution(s) {
    let answer = '';
    a = '';
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] >= 'a' && s[i] <= 'z'){
            a += s[i];
        
            switch(a) {
                case 'zero':
                    answer += '0';
                    a = '';
                    break;
                    
                case 'one':
                    answer += '1';
                    a = '';
                    break;
                    
                case 'two':
                    answer += '2';
                    a = '';
                    break;
                    
                case 'three':
                    answer += '3';
                    a = '';
                    break;
                    
                case 'four':
                    answer += '4';
                    a = '';
                    break;
                    
                case 'five':
                    answer += '5';
                    a = '';
                    break;
                    
                case 'six':
                    answer += '6';
                    a = '';
                    break;
                    
                case 'seven':
                    answer += '7';
                    a = '';
                    break;
                    
                case 'eight':
                    a = '';
                    answer += '8';
                    break;
                    
                case 'nine':
                    answer += '9';
                    a = '';
                    break;
            }
        }
        else answer += s[i];
    }
    
    return +answer;
}