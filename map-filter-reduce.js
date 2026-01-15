const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* Using map */

// 1st way to print double of every number.
function double(x){
    return x * 2;
}
const ans = arr.map(double);
console.log(ans);

// 2nd way to print double of every number.
const ans2 = arr.map(function double(x) {
    return x * 2;
});
console.log(ans2);

// 3rd way to print double of every number.
const ans3 = arr.map((x) => x * 2);
console.log(ans3);




/* Using filter */

const output = arr.filter((x) => x % 2 === 0);
console.log(output);




/* Using reduce */

// Q)Sum of all the digits.
// Q)Maximum of all the elements.
function FindMax(arr){
    let max = arr[0];
    for(let i=1; i<arr.length; i++){
        if(max < arr[i]) max = arr[i];
    }
    return max;
}
console.log(FindMax(arr));

// Using reduce
const answer = arr.reduce((acc, curr) => {
    if(acc < curr) acc = curr;
    return acc;
}, arr[0]);
console.log(answer);