function solution(babbling) {
    let answer = 0;
    
    const changeBabbling = babbling.map(babble => {
        return babble.replace(/aya/g, 'A').replace(/ye/g, 'B')
            .replace(/woo/g, 'C').replace(/ma/g, 'D');
    })
    
    answer = changeBabbling.filter(babble => {
        const includeABCD = babble.replace(/[^ABCD]/g, '');
        const excludeABCD = babble.replace(/[ABCD]/g, '');
        let isRepeatSameBabbling = false;
        let beforeBabbling = '';
        
        if (excludeABCD.length) return false;
        
        includeABCD.split('').forEach(nowBabbling => {
            if (nowBabbling === beforeBabbling) isRepeatSameBabbling = true;
            beforeBabbling = nowBabbling;
        })
        return !isRepeatSameBabbling;
    }).length;

    return answer;
}