function solution(n, w, num) {
    const my_box_floor = Math.ceil(num / w);
    const total_floors = Math.ceil(n / w);
    const top_boxes = n % w;
    const my_box_line = (my_box_floor % 2 === 1 ? (num - 1) % w + 1 : w - ((num - 1) % w));
    
    let answer = total_floors - my_box_floor;
    
    if(top_boxes === 0) return answer + 1;
    else if((my_box_floor % 2) === (total_floors % 2)) {
        if(((num - 1) % w) + 1 <= ((n - 1) % w) + 1) answer += 1;
    }
    else {
        if(((num - 1) % w) + 1 >= (w - (n - 1) % w)) answer += 1;
    }
    
    
    return answer;
}