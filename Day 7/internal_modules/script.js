// const fs = require('node:fs');

// const data = fs.readFileSync('./myReadMe.txt',{encoding:'utf8'});

// console.log(data);


// const fs = require('fs');
// fs.writeFileSync('./logs.txt',"10th April 2024 Day 7");



// const fs = require('fs');
// console.log('start');
// const data = fs.readFileSync('./myReadMe.txt',{encoding:'utf8'});
// console.log(data);
// console.log('End');

//promisis
// const fsPromises = require('fs/promises');
// console.log('start');
// const pr = fsPromises.readFile('./myReadMe.txt',{encoding: 'utf8'});
// console.log(pr);
// pr.then((res)=>{
//     console.log(res);
// })


//callback
// const fs = require('fs');

// fs.readFile('./myReadMe.txt',{encoding: "utf8"}, (err,data)=>{
//     console.log(data);
// });


//http://localhost:1400/
// const http = require('http');

// const app = http.createServer((req, res)=>{
//     console.log('received');
//     console.log(req.url);
//     res.writeHead(200,{
//         'Content-type':'text/html',
//     })
//     res.end('<h2>Hello</h2><br><h3>Hii</h3>');
    
// });

// app.listen(1400, ()=>{
//     console.log('..........Server Started........');
// });     //1000<port<9998



const http = require('http');

const htmlTemplate = `
<!DOCUMENT HTML>
<html>
    <head>

    </head>
    <body>
        _PRODUCT__CARDS_
    </body>
</html>
`

const cardTemplate = `
<div class = 'product-card'>
<h4>__TITLLE</h4>
<p>__INFO__</p>
</div>
`
// const card1 = htmlTemplate.replace('')

const page = htmlTemplate.replace('_PRODUCT__CARDS_',cardTemplate);


const app = http.createServer((req, res)=>{
    console.log('received');
    console.log(req.url);
    res.writeHead(200,{
        'Content-type':'text/html',
    })
    res.end(page);
    
});

app.listen(1400, ()=>{
    console.log('..........Server Started........');
});     //1000<port<9998

// jebfwjebf