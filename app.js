const formidable = require('formidable');
const fs = require('fs');


const http = require('http');

http.createServer((req, res)=>{


    fs.readFile('./index.html', (err, data)=>{
        if(err) throw err;
        console.log('it up');
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        return res.end();

    });
}).listen(8080);