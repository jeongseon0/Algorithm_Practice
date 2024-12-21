function solution(survey, choices) {
    let answer = '';
    let mbti = {'R' : 0, 'T' : 0,
                'C' : 0, 'F' : 0,
                'J' : 0, 'M' : 0,
                'A' : 0, 'N' : 0 };
    
    for(let i = 0; i < survey.length; i++) {
        const type = survey[i].split('');
        switch(choices[i]) {
            case 1:
                mbti[type[0]] += 3;
                break;
            case 2:
                mbti[type[0]] += 2;
                break;
            case 3:
                mbti[type[0]] += 1;
                break;
            case 5:
                mbti[type[1]] += 1;
                break;
            case 6:
                mbti[type[1]] += 2;
                break;
            case 7:
                mbti[type[1]] += 3;
                break;
        }
    }
    answer += (mbti['R'] >= mbti['T'] ? 'R' : 'T');
    answer += (mbti['C'] >= mbti['F'] ? 'C' : 'F');
    answer += (mbti['J'] >= mbti['M'] ? 'J' : 'M');
    answer += (mbti['A'] >= mbti['N'] ? 'A' : 'N');
    
    return answer;
}