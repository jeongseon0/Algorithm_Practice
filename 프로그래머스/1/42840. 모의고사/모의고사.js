function solution(answers) {
    let answer = [];
    const hateMath1 = [1, 2, 3, 4, 5];
    const hateMath2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const hateMath3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    let i = 0;
    
    while (i < answers.length) {
        if (answers[i] === hateMath1[i % hateMath1.length]) cnt1++;
        if (answers[i] === hateMath2[i % hateMath2.length]) cnt2++;
        if (answers[i] === hateMath3[i % hateMath3.length]) cnt3++;
        i++;
    }
    
    console.log(cnt1, cnt2, cnt3);
    
    if (cnt1 >= cnt2 && cnt1 >= cnt3) answer.push(1);
    if (cnt2 >= cnt1 && cnt2 >= cnt3) answer.push(2);
    if (cnt3 >= cnt1 && cnt3 >= cnt2) answer.push(3);
    
    return answer;
}