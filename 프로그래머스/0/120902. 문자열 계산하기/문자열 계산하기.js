function solution(my_string) {
    let answer = 0;
    
    let array = [];
    array = my_string.split(' ');
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] === '+') {
            array[i+1] = (parseInt(array[i-1]) + parseInt(array[i+1])).toString();
        }
        else if(array[i] === '-') {
            array[i+1] = (parseInt(array[i-1]) - parseInt(array[i+1])).toString();
        }
    }
    
    answer = parseInt(array[array.length-1]);
    
    return answer;
}