function solution(park, routes) {
    let answer = [];
    
    for(let i = 0; i < park.length; i++)
        for(let j = 0; j < park[0].length; j++)
            if(park[i][j] === 'S') {
                answer = [i, j];
                break;
            }
    
    const dir = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0],
    };
    
    for(let route of routes) {
        route = route.split(' ');
        let dist = parseInt(route[1]);
        let [x, y] = answer;
        
        let cnt = 0;
        while(cnt < dist) {
            x += dir[route[0]][0];
            y += dir[route[0]][1];
            
            if(x < 0 || x >= park.length || y < 0 || y >= park[0].length || park[x][y] === 'X')
                break;
            cnt++;
        }
        if(cnt === dist) answer = [x, y];
    }
    
    return answer;
}