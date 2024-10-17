function solution(polynomial) {
    let answer = '';
    
    let temp = [];
    temp = polynomial.split(' ');
    
    let sum = [0, 0];
    
    for(let i = 0; i < temp.length; i++) {
        if(temp[i].includes('x')) {
            let xCoeff = temp[i].replace('x', '');
            if(xCoeff === '') xCoeff = '1';
            sum[0] += parseInt(xCoeff);
        }
        else if(temp[i].includes('+')) continue;
        else sum[1] += parseInt(temp[i]);
    }
    
    // if(sum[0] !== 0 && sum[1] !== 0)
    //     answer = sum[0].toString() + 'x' + ' + ' + sum[1].toString();
    // else if(sum[0] !== 0) answer = sum[0].toString() + 'x';
    // else if(sum[1] !== 0) answer = sum[1].toString();
    // else answer = '0';
    
    if(sum[0] === 0 && sum[1] === 0) answer = '0';
    else if(sum[0] === 0) answer = sum[1].toString();
    else if(sum[1] === 0) {
        if(sum[0] > 1) answer += sum[0].toString();
        answer += 'x';
    }
    else {
        if(sum[0] > 1) answer += sum[0].toString();
        answer += 'x' + ' + ' + sum[1].toString();
    }
    
    return answer;
}