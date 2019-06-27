let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let newMassiv = arr.map(function(element) {
    if (element > 0 && element % 2 !== 0) {
        if (element % 3 !== 0) {
            return element;
        }
    }
});

let newArr = newMassiv.filter(function(element, i, arr) {
    return typeof element == 'number'
})

console.log(newMassiv);
console.log(newArr);

// let isPrime = n => Array(Math.ceil(Math.sqrt(n) + 1)).fill().map((e, i) => i).slice(2).every(m => n % m);

// console.log(Array(100).fill().map((e, i) => i + 1).slice(1).filter(isPrime));