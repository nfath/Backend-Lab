const wallet = require('./modules/wallet');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');

    console.log(`url: ${req.url}\n`);

    if(req.url === '/deposit') {
        wallet.depositAmount(100);
        res.end('Deposit request recieved');
    }
    else if(req.url === '/address') {
        wallet.getAddress();
        res.end('Address request received');
    }
    else {
        res.end('Nothing here!\nChange you correct page1');
    }
});

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
