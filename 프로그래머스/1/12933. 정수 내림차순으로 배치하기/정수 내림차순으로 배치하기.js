function solution(n) {
    var answer = 0;

    let arr = [];
    let i = 0;

    while (n > 1) {
        arr[i] = Math.floor(n % 10);
        console.log(i, ": ", arr[i]);
        n = n / 10;
        i++;  
    }

    arr = arr.sort();

    for (i = arr.length - 1; i >= 0 ; i--) answer = answer * 10 + arr[i];
    
    return answer;
}