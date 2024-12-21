function solution(new_id) {
    new_id = new_id.toLowerCase().replaceAll(/[^a-z0-9._-]/g, '').replaceAll(/\.{2,}/g, '.').replaceAll(/\.$|^\./g, '');
    
    if(!new_id.length) new_id = 'a';
    else if(new_id.length >= 16) {
        new_id = new_id.substring(0, 15);
        if(new_id[new_id.length-1] === '.') new_id = new_id.substring(0, 14);
    }
    
    while(new_id.length <= 2) {
        const last = new_id[new_id.length-1];
        new_id += last;
    }
    
    return new_id;
}