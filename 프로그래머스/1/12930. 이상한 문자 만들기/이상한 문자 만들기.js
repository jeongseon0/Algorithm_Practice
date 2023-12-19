function solution(s) {
    let answer = '';
    let words = [];
    let spells = [[]];
    
    s = s.toLowerCase();
    words = s.split(' ');
    
    let i = 0;
    for(word of words) {
        spells[i] = word.split('');
        for(let j = 0; j < spells[i].length; j++) {
            if (j % 2 === 0) spells[i][j] = spells[i][j].toUpperCase();
        }
        i++;
    }
    
    for(i = 0; i < words.length; i++) {
        words[i] = spells[i].join('');
    }
    answer = words.join(' ');
    
    return answer;
}