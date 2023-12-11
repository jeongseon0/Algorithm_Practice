function solution(lottos, win_nums) {
    let answer = [];
    
    const zeroCount = lottos.filter(z => z === 0).length;
    
    let cnt = 0;
    for(num of win_nums) if (lottos.includes(num)) cnt++;
    
    switch (zeroCount + cnt) {
        case 6 :
            answer.push(1);
            break;
        case 5 :
            answer.push(2);
            break;
        case 4 :
            answer.push(3);
            break;
        case 3 :
            answer.push(4);
            break;
        case 2 :
            answer.push(5);
            break;
        default:
            answer.push(6);
            break;
    }
    
    switch (cnt) {
        case 6 :
            answer.push(1);
            break;
        case 5 :
            answer.push(2);
            break;
        case 4 :
            answer.push(3);
            break;
        case 3 :
            answer.push(4);
            break;
        case 2 :
            answer.push(5);
            break;
        default:
            answer.push(6);
            break;
    }
    
    return answer;
}