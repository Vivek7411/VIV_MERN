const http = require('http');
const fs = require('fs');
const data = fs.readFileSync('./data.json', 'utf8');
const dataObj = JSON.parse(data);
const products = dataObj.products;

const htmlTemplate = `
<!DOCTYPE HTML>
<html>
<head>
    <title>Product List</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        product
    </div>
</body>
</html>
`;

const cardTemplate = `
<div class='product-card'>
    <h4>_TITLE</h4>
    <p>_INFO</p>
</div>
`;

const allCards = products.map((elem) => {
    let newCard = cardTemplate;
    newCard = newCard.replace('_TITLE', elem.title);
    newCard = newCard.replace('_INFO', elem.description);
   
    return newCard;
});

const allCardsString = allCards.join(' ');

const page = htmlTemplate.replace('product', allCardsString);

const app = http.createServer((req, res) => {
    console.log('received');
    console.log(req.url);
    if (req.url === '/styles.css') {
        const cssFile = fs.readFileSync('./styles.css', 'utf8');
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.write(cssFile);
        res.end();
    } else {
        res.writeHead(200, {
            'Content-type': 'text/html',
        });
        res.end(page);
    }
});

app.listen(1400, () => {
    console.log("-----------server started----------------");
});