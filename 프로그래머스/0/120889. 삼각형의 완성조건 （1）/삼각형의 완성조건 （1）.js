function solution(sides) {
    let answer = 0;
    
    for (let i = 0; i < sides.length - 1; i++) {
        for (let j = i + 1; j < sides.length; j++) {
            if (sides[i] > sides[j]) {
                let temp = sides[i];
                sides[i] = sides[j];
                sides[j] = temp;
            }
        }
    }
    
    console.log(sides);
    
    if (sides[2] < sides[0] + sides[1]) answer = 1;
    else answer = 2;
    
    return answer;
}