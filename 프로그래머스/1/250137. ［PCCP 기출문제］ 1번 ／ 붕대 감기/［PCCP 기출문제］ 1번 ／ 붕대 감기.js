function solution(bandage, health, attacks) {
    let time = 0, t = 0, i = 0;
    let fullhealth = health;
    
    while(health > 0, time <= attacks[attacks.length-1][0]) {
        if(health >= fullhealth) {
            health = fullhealth;
            t = 0;
        }
        
        if(time === attacks[i][0]) {
            health -= attacks[i][1];
            i++, t = 0;
            if(health <= 0) return -1;
        }
        
        if(t >= 1) health += bandage[1];
        if(t === bandage[0]) t = 0, health += bandage[2];
        time++, t++;
    }
    
    return health;
}