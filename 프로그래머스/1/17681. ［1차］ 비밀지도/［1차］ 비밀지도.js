function solution(n, arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++) {
        let bin1 = arr1[i].toString(2).padStart(n, '0');
        let bin2 = arr2[i].toString(2).padStart(n, '0');
        let sharp = '';
        for(let j = 0; j < n; j++) {
            if(bin1[j] === '0' && bin2[j] === '0') sharp += ' ';
            else sharp += '#';
        }
        answer.push(sharp);
    }
    
    return answer;
}