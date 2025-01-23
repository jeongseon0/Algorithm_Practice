function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let map = {};
    id_list.map((user) => map[user] = []);
    report = [...(new Set(report))];
    
    for(let i = 0; i < report.length; i++) {
        let [user_id, report_id] = report[i].split(' ');
        map[report_id].push(user_id);
    }
    
    for(let key in map)
        if(map[key].length >= k) 
            map[key].map((user) => answer[id_list.indexOf(user)]++);
    
    
    return answer;
}