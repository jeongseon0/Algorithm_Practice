#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

// dot_len은 배열 dot의 길이입니다.
int solution(int dot[], size_t dot_len) {
    int answer = 0;
    int x = 0, y = 1;
    
    if(dot[x] > 0 && dot[y] > 0)
        answer = 1;
    else if(dot[x] < 0 && dot[y] > 0)
        answer = 2;
    else if(dot[x] < 0 && dot[y] < 0)
        answer = 3;
    else if(dot[x] > 0 && dot[y] < 0)
        answer = 4;
    
    
    
    return answer;
}