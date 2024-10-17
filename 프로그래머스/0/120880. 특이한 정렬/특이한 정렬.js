function solution(numlist, n) {
    let answer = [];
    let nearest = [];
    
    for(let i = 0; i < numlist.length; i++) {
        if(numlist[i] > n) nearest[i] = numlist[i] - n;
        else nearest[i] = n - numlist[i];
    }
    
    console.log(nearest);
    
    for(let i = 0; i < numlist.length-1; i++) {
        for(let j = i+1; j < numlist.length; j++) {
            if(nearest[i] > nearest[j]) {
                let temp = nearest[i];
                nearest[i] = nearest[j];
                nearest[j] = temp;
                
                temp = numlist[i];
                numlist[i] = numlist[j];
                numlist[j] = temp;
            }
            if(nearest[i] === nearest[j]) {
                if(numlist[i] < numlist[j]) {
                    let temp = numlist[i];
                    numlist[i] = numlist[j];
                    numlist[j] = temp;
                }
            }
        }
    }
    answer = numlist;
    
    return answer;
}