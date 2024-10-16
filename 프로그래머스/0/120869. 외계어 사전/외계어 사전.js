function solution(spell, dic) {
    let answer = 2;
    
    for(let i = 0; i < dic.length; i++) {
        let is_spell = [];
        for(let j = 0; j < spell.length; j++) {
            is_spell[j] = dic[i].includes(spell[j]);
        }
        if(!is_spell.includes(false)) answer = 1;
    }
    
    return answer;
}