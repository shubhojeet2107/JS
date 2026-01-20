// async function getData(){
//     return "Namaste";
// }
// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((res) => console.log(res));
// The above code wraps up a string "Namaste" inside a promise and then returns it. 



// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!!")
// })

// async function getData1(){
//     return p;
// }
// const dataPromise1 = getData1();
// dataPromise1.then((res) => console.log(res));
// The above code returns the promise. 



// Now below we will write codes related to async-await.
// const p1 = new Promise((resolve, reject) => {
//     resolve("Promise2 Resolved Value!!")
// })

// function getData2(){
//     p1.then((res) => console.log(res)) 
// }
// getData2();


// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Resolved Value!!")
//     }, 10000)
// });

// async function handlePromise(){
//     console.log("Hello World!!");
//     const value = await p; // In this line JS engine will wait till the promise gets resolved. Only then it moves to the next line. 
//     console.log("Namaste Javascript");
//     console.log(value);
// }

// handlePromise();

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved value!!")
    }, 5000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 resolved value!!")
    }, 10000)
})


async function handlePromise(){
    console.log("Hello World");

    const val1 = await promise1;
    console.log(val1);

    const val2 = await promise2;
    console.log(val2);
}
handlePromise();