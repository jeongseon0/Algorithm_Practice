#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// numbers_len은 배열 numbers의 길이입니다.
int solution(int numbers[], size_t numbers_len) {
    int answer = 0;
    int i, idx = 0;
    int max1 = 0, max2 = 0;
    
    for(i = 0; i < numbers_len; i++){
        if(max1 < numbers[i]){
            max1 = numbers[i];
            idx = i;
        }    
    }
    for(i = 0; i < numbers_len; i++){
        if(idx == i)
            continue;
        if(max2 < numbers[i]){
            max2 = numbers[i];
        }    
    }
    
    answer = max1 * max2;
    
    return answer;
}