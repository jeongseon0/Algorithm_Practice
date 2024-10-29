function solution(arr1, arr2) {
    let answer = 0;
    
    if(arr1.length > arr2.length) return 1;
    else if(arr1.length < arr2.length) return -1;
    
    let add1 = 0, add2 = 0;
    for(let i = 0; i < arr1.length; i++) {
        add1 += arr1[i];
        add2 += arr2[i];
    }
    
    if(add1 > add2) answer = 1;
    else if(add1 < add2) answer = -1;
    
    return answer;
}