function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for(let i = 0, j = 0; i < schedules.length; i++) {
        let safetime;
        if((schedules[i]+10)%100 < 60) safetime = schedules[i] + 10;
        else safetime = schedules[i] + 50;
        
        for(j = 0; j < 7; j++) {
        if((j+startday) % 7 === 6 || (j+startday) % 7 === 0) continue;
        
            console.log(i, safetime, timelogs[i][j]);
        if(timelogs[i][j] > safetime) break;
        }
        if(j >= 7) answer++;
    }
    
    return answer;
}