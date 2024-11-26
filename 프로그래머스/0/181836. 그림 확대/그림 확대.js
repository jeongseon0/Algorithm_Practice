function solution(picture, k) {
    let answer = [];
    
    for(let i = 0; i < picture.length; i++) {
        let temp = '';
        for(let j = 0; j < picture[i].length; j++) {
            for(let n = 0; n < k; n++) temp += picture[i][j];
        }
        for(let n = 0; n < k; n++) answer.push(temp);
    }
    
    return answer;
}