function solution(today, terms, privacies) {
    let answer = [];
    let termsMap = {};
    
    today = new Date(today);
    
    terms.forEach((item) => {
        let temp = item.split(' ');
        termsMap[temp[0]] = Number(temp[1]);
    });
    
    for(let i = 0; i < privacies.length; i++) {
        let temp = privacies[i].split(' ');
        let date = temp[0].split('.');
        let expirationDate = new Date(Number(date[0]), Number(date[1])+termsMap[temp[1]]-1, Number(date[2]));

        if(today >= expirationDate) answer.push(i+1);
    }
    
    return answer;
}