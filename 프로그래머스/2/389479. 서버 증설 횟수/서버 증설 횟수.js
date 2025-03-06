function solution(players, m, k) {
    let answer = 0;
    let h = 0, t = [];  // 시각, 증설 서버 운영된 시간
    let server = 0, add_server = [];
    
    while(h < 24) {
        let i = 0;
        while(i === 0) {
            if(t[i] >= k) {
                const down_server = add_server.shift();
                server -= down_server;
                t.shift();
            }
            else i++;
        }
        
        const required_server = Math.floor(players[h] / m);
        
        if(server < required_server) {
            answer += required_server - server;
            add_server.push(required_server - server);
            server = required_server;
            t.push(0);
        }
        
        console.log(h, players[h], server, answer);
        
        h++;
        for(let i = 0; i < t.length; i++) t[i]++;
    }
    
    return answer;
}