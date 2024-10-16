function solution(dots) {
    let answer = 0;
    let max = [-256, -256];
    let min = [256, 256];
    
    for(let i = 0; i < dots.length; i++) {
        if(dots[i][0] > max[0]) max[0] = dots[i][0];
        if(dots[i][1] > max[1]) max[1] = dots[i][1];
        if(dots[i][0] < min[0]) min[0] = dots[i][0];
        if(dots[i][1] < min[1]) min[1] = dots[i][1];
    }
    answer = (max[0] - min[0]) * (max[1] - min[1]);
    
    return answer;
}