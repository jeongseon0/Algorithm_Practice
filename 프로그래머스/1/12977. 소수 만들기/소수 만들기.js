function solution(nums) {
    let answer = 0;
    
    
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i + 1; j < nums.length - 1; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let number = nums[i] + nums[j] + nums[k];
                let cnt = 0;
                for(let l = 1; l <= number; l++) {
                    if (number % l === 0) cnt++;
                }
                if (cnt === 2) answer++;
            }
        }
    }
    
    return answer;
}