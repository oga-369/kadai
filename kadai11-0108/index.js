const http = require('http');

const server = http.createServer((req, res) => {
        let result
        const num = Math.random()
        res.setHeader('Access-Control-Allow-Origin', '*');

            if(num < 0.3) {
                res.write('黄色のマフラー')
            } else　if(num < 0.5) {
                res.write('スルメ')
            } else if(num < 0.8) {
                res.write('マシュマロ')
            } else {
                res.write('赤い靴下')
            }
    
    res.end()
    })
    server.listen(4000);
    console.log('Listening port 4000...');

 