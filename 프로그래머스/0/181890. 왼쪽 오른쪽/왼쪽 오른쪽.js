function solution(str_list) {
    let answer = [];
    
    const L_in = str_list.includes('l');
    const R_in = str_list.includes('r');
    
    // l, r 이 모두 없는 경우
    if(!L_in && !R_in) return [];
    
    const len = str_list.length;
    const L_idx = str_list.indexOf('l');
    const R_idx = str_list.indexOf('r');
    
    // l만 있는 경우
    if(L_in && !R_in) {
        // l 왼쪽으로 아무것도 없는 경우
        if(L_idx === 0) return [];
        // 있는 경우
        else {
            for(let i = 0; i < L_idx; i++) answer.push(str_list[i]);
            return answer;
        }
    }
    
    // r만 있는 경우
    else if(!L_in && R_in) {
        // r 오른쪽으로 아무것도 없는 경우
        if(R_idx === len - 1) return [];
        // 있는 경우
        else {
            for(let i = R_idx + 1; i < len ; i++) answer.push(str_list[i]);
            return answer;
        }
    }
    
    // l, r 모두 있는 경우
    else if(L_in && R_in) {
        // l이 먼저 오는 경우
        if(L_idx < R_idx) {
            // l 왼쪽으로 아무것도 없는 경우
            if(L_idx === 0) return [];
            // 있는 경우
            else {
                for(let i = 0; i < L_idx; i++) answer.push(str_list[i]);
                return answer;
            }
        }
        
        // r이 먼저 오는 경우
        else {
            // r 오른쪽에 다른 원소들이 있는 경우(only)
            for(let i = R_idx + 1; i < len ; i++) answer.push(str_list[i]);
            return answer;
        }
    }
        
    return answer;
}