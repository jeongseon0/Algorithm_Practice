#include<stdio.h>

int main() {
    // 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F
    int score;
    
    scanf("%d", &score);
    
    if(score >= 90) printf("A");
    else if(score >= 80) printf("B");
    else if(score >= 70) printf("C");
    else if(score >= 60) printf("D");
    else printf("F");
    
    return 0;
}
