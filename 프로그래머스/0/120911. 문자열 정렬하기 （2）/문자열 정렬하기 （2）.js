function solution(my_string) {
    let answer = '';
    
    let temp_arr = [];
    
    for(let i = 0; i < my_string.length; i++){
        const char = my_string[i];
        if(char === char.toUpperCase())
            temp_arr[temp_arr.length] = char.toLowerCase();
        else temp_arr[temp_arr.length] = char;
    }
    
    for (let i = 0; i < temp_arr.length - 1; i++) {
        for (let j = i + 1; j < temp_arr.length; j++) {
            if (temp_arr[i] > temp_arr[j]) {
                let temp = temp_arr[i];
                temp_arr[i] = temp_arr[j];
                temp_arr[j] = temp;
            }
        }
    }
    
    answer = temp_arr.join('');
    
    return answer;
}