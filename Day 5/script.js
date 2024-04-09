// let arr=[2,5,34,4];

// function printArr(arr){

//     for(let i =0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }

// printArr(arr);

// function printPrity(elem){
//     console.log(': ',elem);
// }
// function printArr(arr){
//     for(let i =0;i<arr.length;i++){
//         console.log(arr[i]);

        
//     }
//     arr.forEach(printPrity);
// }


// arr.array.forEach(elem => {
    
// });


// printArr(arr);

// console.log('GEC Start');

// function printPrity(elem){

//     console.log('prettyStart');
//     let ans=2+3;
//     console.log(ans);
//     console.log('prettyEnd');
// }

// setTimeout(printPrity, 10000);



// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
            

// console.log('GEC End');


// console.log('GEC START');

// function printPreety(){
//     console.log('preetyPrintstart');

//     let ans = 2+3;
//     console.log(ans);
//     console.log('preetyPrintend');
// }

// // setTimeout(printpreety,10000);
// // console.log('GEC END');


// //--------------------------event handler 
// const btn = document.getElementById('btn'); //dynamic event handler
// btn.addEventListener("click", printPreety);

//----------------------Promises---------------

// console.log('start');

// const req = fetch("https://api.github.com/users/Deepak3440");

// console.log(req);

// req.then(()=> console.log("Fetched"));

// console.log('end');


// console.log('start');
// fetch('https://dummyjson.com/products/1')            //dummyjson
// // .then(res => console.log(res))
// .then(res => res.json())
// // .then(json => console.log(json))
// console.log('end');

// const req = fetch("https://dummyjson.com/products/1");

// const res = req.then(res => res.json());

// console.log(req);

// res.then((data)=>console.log(data));

// console.log('...app started');

// function callAPI(){
//     fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=52a17c7ec7be4f8d800587b613fe71a0")
//     .then((res)=>{
//         console.log(res);
//     })

//     .then((data)=>{
//         console.log(data);
//     })
// }

// function renderUI(){
//     const root = document.getElementById("root");

//     const div = document.createElement("div");
//     div.innerText='card';

//     root.appendChild(div);
// }
// callAPI();
//renderUI();

// callAPI();

console.log("...APP STARTTED....");

function callAPI() {
  fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=52a17c7ec7be4f8d800587b613fe71a0")
  .then((res) => 
    res.json()
  )
  .then((data)=>{
    renderUI(data);
  })
}

// abb2d76ece684caf9ee4a447aa0ff915 sumit key

function renderUI(data){
    console.log(data);

    const articles = data.articles;

    const root = document.getElementById("root");

    const ar = articles[0];
    console.log(ar);
    
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = ar.title;
    div.appendChild(h3);

    const img = document.createElement("img");
    img.src=ar.urlToImage;
    div.appendChild(img);



    
    root.appendChild(div);
}

callAPI();
// renderUI();