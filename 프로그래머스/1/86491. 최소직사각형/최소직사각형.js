function solution(sizes) {
    let answer = 0;
    let max_w = 0;
    let max_h = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] < sizes[i][1]){
            let temp = sizes[i][0];
            sizes[i][0] = sizes[i][1];
            sizes[i][1] = temp;
        }
        if(max_w < sizes[i][0]) max_w = sizes[i][0];
        if(max_h < sizes[i][1]) max_h = sizes[i][1];
    }
    answer = max_w * max_h;
    return answer;
}