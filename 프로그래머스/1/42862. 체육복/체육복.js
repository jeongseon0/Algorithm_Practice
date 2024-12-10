function solution(n, lost, reserve) {
    
    let realLost = lost.filter((l) => !reserve.includes(l)).sort((a,b) => a - b);
    let realReserve = reserve.filter((r) => !lost.includes(r)).sort((a,b) => a - b);
    let answer = n - realLost.length;
    
    for(let l of realLost) {
        if(realReserve.includes(l-1)) {
            realReserve = realReserve.filter((r) => r !== l-1);
            answer++;
        }
        else if(realReserve.includes(l+1)) {
            realReserve = realReserve.filter((r) => r !== l+1);
            answer++;
        }
    }
    
    
    return answer;
}