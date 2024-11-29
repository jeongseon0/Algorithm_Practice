function solution(nums) {
    let answer = 0;
    let temp = [];
    
    for(let num of nums) if(!temp.includes(num)) temp.push(num);
    
    temp.length < nums.length/2 ? answer = temp.length : answer = nums.length/2;
    
    return answer;
}