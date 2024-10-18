function solution(lines) {
    let answer = 0;
    let temp = [];
    
    for(let i = 0; i < lines.length; i++) {
        if(lines[i][0] <= lines[(i+1)%3][0] && 
           lines[(i+1)%3][0] < lines[i][1] && 
           lines[i][1] <= lines[(i+1)%3][1]) {
            for(let j = lines[(i+1)%3][0]; j <lines[i][1]; j++) temp[temp.length] = j;
        }
        if(lines[(i+1)%3][0] <= lines[i][0] && 
           lines[i][0] < lines[(i+1)%3][1] && 
           lines[(i+1)%3][1] <= lines[i][1]) {
            for(let j = lines[i][0]; j <lines[(i+1)%3][1]; j++) temp[temp.length] = j;
        }
        if(lines[i][0] <= lines[(i+1)%3][0] && 
           lines[(i+1)%3][0] < lines[(i+1)%3][1] && 
           lines[(i+1)%3][1] <= lines[i][1]) {
            for(let j = lines[(i+1)%3][0]; j <lines[(i+1)%3][1]; j++) temp[temp.length] = j;
        }
        if(lines[(i+1)%3][0] <= lines[i][0] && 
           lines[i][0] < lines[i][1] && 
           lines[i][1] <= lines[(i+1)%3][1]) {
            for(let j = lines[i][0]; j <lines[i][1]; j++) temp[temp.length] = j;
        }
        if(lines[i][0] === lines[(i+1)%3][0] && lines[i][1] === lines[(i+1)%3][1])
            for(let j = lines[i][0]; j <lines[i][1]; j++) temp[temp.length] = j;
    }
    
    temp = temp.sort();
    
    for(let i = 0; i < temp.length; i++) {
        if (temp[i] !== temp[i-1]) answer++;
    }
    
    return answer;
}