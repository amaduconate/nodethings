const formidable = require('formidable');
const fs = require('fs');
const nodemailer = require('nodemailer');


const http = require('http');
const { getMaxListeners } = require('process');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'amaduconate2@gmail.com',
        pass: 'Normalmente1222'
    }
});

const mailOptions = {
    from: 'amaduconate2@gmail.com',
    to: 'amaduconate@gmail.com',
    subject: 'Sending Email From the server node.js',
    text: 'That was hella of the job mate'


};

transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});






// http.createServer((req, res)=>{
//     if (req.url == '/fileUpload') {
//         console.log('it pass throw');
//         const form = new formidable.IncomingForm();
//         form.parse(req, (err, fields, files)=>{
//             const oldPath = files.fileToUpload.path;
//             const newPath = '/' + files.fileToUpload.name.name;
//             fs.rename(oldPath, newPath, (err)=>{
//                 if (err) throw err;
//                 res.write('my file just moved out here upa');
//                 console.log('it pass throw');
//                 return res.end();
//             });
//             return res.end();

//         });

        
//     } 
//     fs.readFile('./index.html', (err, data)=> {
//         if(err) throw err;
//         console.log('it up');
//         res.writeHead(200, {'content-type': 'text/html'});
//         res.write(data);
//         return res.end();
//     }
//     );

// }).listen(8080);

console.log("end of the story");