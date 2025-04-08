//<-------------------Task-1------------------->

function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}

function getSquaredEvens(arr) {
    return arr.filter(num => num % 2 === 0).map(num => num * num);
}

const nums = [-5,-4,-3, -2, 0, 1, 2, 3, 4, 5];

console.log("Positive Numbers:", getPositiveNumbers(nums));

console.log("Squared Evens:", getSquaredEvens(nums));

//<-------------------Task-2------------------->

function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));  
console.log(getFee(false)); 