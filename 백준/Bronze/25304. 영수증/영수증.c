#include <stdio.h>

int main() {
    int price, n;
    int A, B, i, sum = 0;

    scanf("%d %d", &price, &n);

    for(i = 0; i < n; i++) {
        scanf("%d %d", &A, &B);
        sum += (A * B);
    }

    if(price == sum) printf("Yes");
    else printf("No");
    
    return 0;
}