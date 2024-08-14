// console.log('one');//first instructions
// console.log('two');// second instructions

// setTimeout(()=>{
//     console.log('hello yash');//third instructions
// },4000)
// console.log('four');// fourth instructions 



// callbacks

// const sum=(a,b)=>{
//     console.log(a+b)
// }

// function cal(a,b,sumcallbacks){
//     sumcallbacks(a,b)
// }

// cal(3,2,sum);

//note  you can write sum,sumcallbaks,or any other name because actully pass the sum function 


// callbackhell

// function getdata(dataid, callbackfunction) {
//     // 2s
//     setTimeout(() => {
//         console.log(dataid);
//         // this condition is true if pass callback or not
//         if (callbackfunction) {
//             callbackfunction();
//         }

//     }, 2000)
// }

// getdata(1, () => {
//     console.log("getting data 2 ........");
//     getdata(2, () => {
//         console.log("getting data 3 ........");
//         getdata(3, () => {
//             console.log("getting data 4 ........");
//             getdata(4)
//         })
//     })
// })



// let promis=new Promise((resolve,reject)=>{
//     console.log("promise is created");
//      resolve("data is resolved");
// })



// function getdata(dataid) {
//     return new Promise((resolve, reject) => {
//         // 2s
//         setTimeout(() => {
//             console.log(dataid);
//             // this condition is true if pass callback or not
//             resolve('success')


//         }, 3000)
//     })
// }

// getdata(1).then(()=>{
//     console.log("getting data 2 ........");
//     return getdata(2)

// }).then(()=>{
//     console.log("getting data 3 ........");
//     return getdata(3)
// }).then(()=>{
//     console.log("getting data 4 ........");
// })


// console.log("yash1");
// console.log("yash1");
// console.log("yash1");
// setTimeout(()=>{
//     console.log(" set time out");
// },2000)




// let promise=getdata(2);
// console.log(promise);


// function getdata() {
//     return new Promise((resolve, reject) => {
//         console.log("promise is created");
//         reject("network error");
//     })
// }

// let promise=getdata();

// promise.catch((error)=>{
//     console.log(error)
// })




function getdata(dataid) {
    return new Promise((resolve, reject) => {
        // 2s
        setTimeout(() => {
            console.log(dataid);
            // this condition is true if pass callback or not
            resolve('success')


        }, 2000)
    })
}

(async()=>{
    console.log("getting data 1 ........");
    await getdata(1);
    console.log("getting data 2 ........");
    await getdata(2);
    console.log("getting data 3 ........");
    await getdata(3);
    console.log("all data is fetched");
})();



// async function getdatafun() {
//     console.log("getting data 1 ........");
//     await getdata(1);
//     console.log("getting data 2 ........");
//     await getdata(2);
//     console.log("getting data 3 ........");
//     await getdata(3);
//     console.log("all data is fetched");
// }
// getdatafun();



(function () {

    //code

})();

(() => {

    //code

})();

(async () => {

    //code

})();