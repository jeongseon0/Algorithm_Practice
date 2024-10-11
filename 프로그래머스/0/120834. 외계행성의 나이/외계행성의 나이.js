function solution(age) {
    let answer = '';
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    
    let temp_arr = [];
    while(age > 0){
        temp_arr.unshift(age % 10);
        age = Math.trunc(age/10);
    }
    
    for(let i = 0; i < temp_arr.length; i++){
        answer += abc[temp_arr[i]];
    }
    
    return answer;
}