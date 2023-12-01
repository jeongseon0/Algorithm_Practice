function solution(array, commands) {
    let answer = [];
    
    for (let n = 0; n < commands.length; n++) {
        let i = commands[n][0];
        let j = commands[n][1];
        let k = commands[n][2];
        let copyArray = array.slice(i - 1, j).sort(function (a,  b) { return a - b;});
        answer.push(copyArray[k - 1]);
        console.log(i, j, k, copyArray, answer);
    }
    
    return answer;
}