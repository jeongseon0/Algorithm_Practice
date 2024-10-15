function solution(bin1, bin2) {
    let answer = '';
    
    let temp = [];
    let up = 0;
    let i = bin1.length - 1;
    let j = bin2.length - 1;
    
    while(i >= 0 && j >= 0) {
        console.log(i, j, bin1[i], bin2[j]);
        if(bin1[i] === '0' && bin2[j] === '0') {
            if (!up) temp.unshift('0');
            else {
                temp.unshift('1');
                up = 0;
            }
        }
        else if (bin1[i] === '1' && bin2[j] === '0') {
            if (!up) temp.unshift('1');
            else {
                temp.unshift('0');
                up = 1;
            }
        }
        else if (bin1[i] === '0' && bin2[j] === '1') {
            if (!up) temp.unshift('1');
            else {
                temp.unshift('0');
                up = 1;
            }
        }
        else {
            if (!up) {
                temp.unshift('0');
                up = 1;
            }
            else {
                temp.unshift('1');
                up = 1;
            }
        }
        i--;
        j--;
    }
    while(j < 0 && i >= 0) {
        if(bin1[i] === '0') {
            if (!up) temp.unshift('0');
            else {
                temp.unshift('1');
                up = 0;
            }
        }
        else {
            if (!up) temp.unshift('1');
            else {
                temp.unshift('0');
                up = 1;
            }
        }
        i--;
    }
    while(i < 0 && j >= 0) {
        if(bin2[j] === '0') {
            if (!up) temp.unshift('0');
            else {
                temp.unshift('1');
                up = 0;
            }
        }
        else {
            if (!up) temp.unshift('1');
            else {
                temp.unshift('0');
                up = 1;
            }
        }
        j--;
    }
    
    if (up) temp.unshift('1');
    
    answer = temp.join('');
    
    return answer;
}