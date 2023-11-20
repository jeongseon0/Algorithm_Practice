process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const a = data.split(" ");
    const n = Number(a[0]), m = Number(a[1]);
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            process.stdout.write('*');
        }
        console.log('');
    }
    
    
});