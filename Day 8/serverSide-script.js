// const fs = require("fs");
// const http = require("http");
// const url = require("url");

// const data = fs.readFileSync("./data.json", "utf8");
// const dataobj = JSON.parse(data).products;

// const cardTemplate = `
// <div class='product-card'>
//     <h4>TITLE</h4>
//     <img src='_img' alt='product-image'></img>
//     <a href='product-links'>More Info</a>
// </div>
// `;

// let result = [];

// for (let i = 0; i < dataobj.length; i++) {
//   let temp = cardTemplate;
//   temp = temp.replace("TITLE", dataobj[i].title);
//   temp = temp.replace("_img", dataobj[i].images[0]);
//   temp = temp.replace("product-links",`/product?id=${i}`);
//   result.push(temp);
// }

// result = result.join(" ");

// const server = http.createServer((req, res) => {
//   // const route = req.url;
//   // console.log(route);
//   // const path = url.parse(route, true);
//   // const pathname = path.pathname;
//   const { pathname, query } = url.parse(req.url,true);
//   console.log(pathname);
//   if (pathname === "/home") {
//     res.end(result);
//   } else if (pathname === "/product") {
//     const id = query.id;
//     const product = dataobj[id];
//     console.log(dataobj[id]);
//     res.end("product");
//   } else {
//     res.end("404");
//   }
// });
// // res.end(result);

// server.listen(1400); 



















const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;

const cardTemplate = `
    <div class="product-card">
        <h3>$TITLE$</h3>
        <img src="$img_src$" alt='product-image'/>
        <a href="$product_link$">More Info</a>
    </div>
`;

let result = [];
for (let i = 0; i < dataObj.length; i++) {
  let temp = cardTemplate;
  temp = temp.replace("$TITLE$", dataObj[i].title);
  temp = temp.replace("$img_src$", dataObj[i].images[0]);
  temp = temp.replace("$product_link$", `/product?id=${i}`);
  result.push(temp);
}
result = result.join(" "); // why use this.

const styleSheet = `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    // backgroung-color:Black;
}

.navbar {
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;
    width: 100%;
}

.navbar a {
    float: right;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
}

.navbar a:first-child {
    float: left;
    font-size: 24px;
    padding: 10px 20px;
}

.navbar a:hover {
    text-decoration: none; /* Removed underline */
}

.container {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product-card {
    flex: 0 0 calc(33.33% - 20px);
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    padding: 20px;
    transition: box-shadow 0.3s ease;
    box-sizing: border-box;
}

.product-card h3 {
    color: #333;
}

.product-card img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 10px;
    border-radius: 100%;
    border: 2px;
    border-style: solid;
    border-colour: Balck;
}

.product-card a {
    color: #007bff;
    text-decoration: none;
}

.product-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    background-color: Gold;
}

.product-card:hover h3 {
    color: #ff5733; /* Changed title color on hover */
}

`;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true);
  const pathname = path.pathname;
  const q = path.query;
  if (pathname === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <html>
        <head>
            <title>Home</title>
            <style>${styleSheet}</style>
        </head>
        <body>
            <div class="navbar">
                <a href="/home">Product Store</a>
                <form action="/Product" method="GET">
                    <input type="text" placeholder="Search..." name="id">
                    <button type="submit">Search</button>
                </form>
                <a href="/home">Home</a>
                <a href="/product">Products</a>
            </div>
            <div class="container">
                ${result}
            </div>
        </body>
        </html>
        `);
  } else if (pathname === "/about") {
    res.end("Vivek Nehra");
  } else if (pathname === "/product") 
  {
    const id = q.id;
    const item = dataObj[id];
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
            <head>
                <title>${item.title}</title>
                <style>${styleSheet}</style>
            </head>
            <body>
                <div class="navbar">
                    <a href="/home">Server</a>
                    <a href="/home">Home</a>
                    <a href="/product">product</a>
                </div>
                <div>
                    <h4>${item.title}</h4>
                    <img src="${item.images[0]}" alt="">
                    <p>${item.description}</p>
                    <p>Price: ${item.price}</p>
                    <p>Rating: ${item.rating}</p>
                    <p>Brand: ${item.brand}</p>
                </div>
            </body>
            </html>
        `);
  } else {
    res.end("you have reached 404");
  }
});
server.listen(1400);


 

















// const server = http.createServer((req, res) => {
//   const path = url.parse(req.url, true);
//   const pathname = path.pathname;
//   const q = path.query;
//   if (pathname === "/home") {
//     // Your existing logic for rendering the home page...
//   } else if (pathname === "/about") {
//     // Your existing logic for rendering the about page...
//   } else if (pathname === "/product") {
//     const id = q.id;
//     if (id !== undefined && id >= 0 && id < dataObj.length) {
//       const item = dataObj[id];
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(`
//           <html>
//           <head>
//               <title>${item.title}</title>
//               <style>${styleSheet}</style>
//           </head>
//           <body>
//               <div class="navbar">
//                   <a href="/home">Server</a>
//                   <a href="/home">Home</a>
//                   <a href="/product">product</a>
//               </div>
//               <div>
//                   <h4>${item.title}</h4>
//                   <img src="${item.images[0]}" alt="">
//                   <p>${item.description}</p>
//                   <p>Price: ${item.price}</p>
//                   <p>Rating: ${item.rating}</p>
//                   <p>Brand: ${item.brand}</p>
//               </div>
//           </body>
//           </html>
//       `);
//     } else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Product not found");
//     }
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page not found");
//   }
// });
// server.listen(1400);

