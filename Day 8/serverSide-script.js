const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./data.json", "utf8");
const dataobj = JSON.parse(data).products;

const cardTemplate = `
<div class='product-card'>
    <h4>TITLE</h4>
    <img src='_img' alt='product-image'></img>
    <a href='product-links'>More Info</a>
</div>
`;

let result = [];

for (let i = 0; i < dataobj.length; i++) {
  let temp = cardTemplate;
  temp = temp.replace("TITLE", dataobj[i].title);
  temp = temp.replace("_img", dataobj[i].images[0]);
  temp = temp.replace("product-links",`/product?id=${i}`);
  result.push(temp);
}

result = result.join(" ");

const server = http.createServer((req, res) => {
  // const route = req.url;
  // console.log(route);
  // const path = url.parse(route, true);
  // const pathname = path.pathname;
  const { pathname, query } = url.parse(req.url,true);
  console.log(pathname);
  if (pathname === "/home") {
    res.end(result);
  } else if (pathname === "/product") {
    const id = query.id;
    const product = dataobj[id];
    console.log(dataobj[id]);
    res.end("product");
  } else {
    res.end("404");
  }
});
// res.end(result);

server.listen(1400); 