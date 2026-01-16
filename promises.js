const cart = ["shoes", "rackets", "stationery"];

// Using Callback
createOrder(cart, function(orderId){
    proceedToPayment(orderId) 
}); 
/* In the above example createOrder depends upon proceedtoPayment */

// Using promises
const promise = createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId)
});



const GITHUB_API = "https://api.github.com/users/shubhojeet2107";

const user = fetch(GITHUB_API); // fetch(GITHUB_API) returns a Promise immediately. user is a Promise in PENDING state. 
console.log(user);
/* 
This runs immediately, before the network call finishes.
So you will see something like:
Promise { <pending> } -> Promise is still in PENDING state.

Meanwhile, in the background:
Browser is making HTTP request. Waiting for GitHub server response. JS does NOT wait here (non-blocking).
When the server responds successfully:
Pending → Fulfilled
*/