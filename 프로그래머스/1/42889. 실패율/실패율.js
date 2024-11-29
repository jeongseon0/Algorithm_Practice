function solution(N, stages) {
    // N: 스테이지 개수
    // stages: 사용자가 현재 도전 중인 스테이지 번호 배열
    // result: 각 스테이지를 성공하지 못한 사용자 수 배열
    
    let user = stages.length;
    const current_stage = Array.from({length:N+1}, (v, i) => 0);
    const failure_rate = Array.from({length:N}, (v, i) => 0);
    
    for(let i = 0; i < stages.length; i++) current_stage[stages[i]-1]++;
    for(let i = 0; i < failure_rate.length; i++) {
        failure_rate[i] = current_stage[i]/user;
        user -= current_stage[i];
    }
    
    let order_by_failure = {};
    for(let i = 0; i < failure_rate.length; i++) order_by_failure[i+1] = failure_rate[i];
    console.log(order_by_failure);
    
    let answer = Object.keys(order_by_failure).sort((a, b) => order_by_failure[b] - order_by_failure[a]);
    
    answer = answer.map((x) => Number(x));
    
    return answer;
}
