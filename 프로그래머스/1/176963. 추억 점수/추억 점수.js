function solution(name, yearning, photo) {
    let answer = [];
    
    for(let i = 0; i < photo.length; i++) {
        answer[i] = 0;
        for(let p = 0; p < name.length; p++) {
            if(photo[i].includes(name[p])) 
                photo[i].splice(photo[i].indexOf(name[p]), 1, yearning[p]);
        }
        for(let j = 0; j < photo[i].length; j++) {
            if(typeof photo[i][j] === 'number') answer[i] += photo[i][j];
        }
    }
    
    return answer;
}