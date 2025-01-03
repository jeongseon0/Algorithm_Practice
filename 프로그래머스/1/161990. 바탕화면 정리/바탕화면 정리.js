function solution(wallpaper) {
    let answer = [50, 50, 0, 0];
    
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[0].length; j++) {
            if(wallpaper[i][j] !== '#') continue;
            if(i < answer[0]) answer[0] = i;
            if(j < answer[1]) answer[1] = j;
            if(i > answer[2]) answer[2] = i;
            if(j > answer[3]) answer[3] = j;
        }
    }
    
    answer[2]++, answer[3]++;
    
    return answer;
}