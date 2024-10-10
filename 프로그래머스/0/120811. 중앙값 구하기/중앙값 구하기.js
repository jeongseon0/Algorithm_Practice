function solution(array) {
    let answer = 0;
    
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    
    for (let i = 0, j = array.length - 1; i < array.length, j >= 0; i++, j--) {
        if (i === j) answer = array[i];
    }
    
    return answer;
}