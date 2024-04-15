// console.log('hello');

// setTimeout(()=>{console.log('timeout');},5000);

// console.log('end');

// new Promise((resolveOuter) => {
//     resolveOuter(
//       new Promise((resolveInner) => {
//         setTimeout(resolveInner, 1000);
//       }),
//     );
//   });

//   myPromise
//   .then(handleFulfilledA)
//   .then(handleFulfilledB)
//   .then(handleFulfilledC)
//   .catch(handleRejectedAny);

//GEC  start immediate end
//callback queue timeout2
//microtask queue priority high
//callstack timeout1
//broser
// console.log('start');

// // setTimeout(()=>{console.log('timeout');},3000);  //last
// setTimeout(()=>{
//     console.log('timeout1');
// },4000);  //last same
// setTimeout(()=>{
//     console.log('timeout2');
// },2000);  //last same

// console.log('intermmediate');
// console.log('end');


//why promises?
//inversion of control-----------------------------------------
// function createOrder(x,fn){
//     console.log(x);
//     setTimeout(()=> {fn('lik123')},2000);
// }

// function makePayement(orderId){
//     console.log(orderId);
// }

// createOrder('soap',makePayement);


//creating own promises---------------------------------promise part of js

// const pr = new Promise((resolve,reject)=>{
//    if(true){
//     // resolve();
//     setTimeout(() => {
//         resolve()
//     }, Math.random(10)*1000);
//    }else{
//     reject();
//    }
// });

// console.log(pr);

// setTimeout(() => {
//     console.log('First timeout');
// }, 0);


// const pr = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // resolve("done-123")
//         reject('Some items are out of stock')
//     }, 0);
// });

// console.log(pr);   //sometimes fulfilled sometimes pending beacuse when we click before or after fulfilled

// pr.then((res)=>{
//     console.log(res);          //output - done-123
// }).catch((error)=>{
//     console.log(error);        //Some items are out of stock
// });


// setTimeout(function abc(){
//     console.log('i am one');
// },0);

// const pr = new Promise((res, rej)=>{
//     setTimeout(()=>{res('done')},0);
// })


// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])
