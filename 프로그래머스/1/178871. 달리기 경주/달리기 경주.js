function solution(players, callings) {
    let map = new Map;
    
    players.forEach((player,i) => map.set(player,i));
    
    for(let c of callings) {
        const index = map.get(c);
        
        map.set(c, index-1);
        map.set(players[index-1], index);
        
        [players[index],players[index-1]]=[players[index-1],players[index]];
    }
    
    return players;
}