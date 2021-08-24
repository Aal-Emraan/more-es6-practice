const numbers = [1,2,3,4,4,45,5,5,5,56,6,6,6,6,6,7,7,78,8];
const bigNumbers = numbers.filter(x => x >10);
console.log(bigNumbers);

const smallNumbers = numbers.filter(x => x <10);
console.log(smallNumbers);

const  products = [
    {name: 'apple watch', price: 40000, color: 'black'},
    {name: 'router', price: 3000, color: 'white'},
    {name: 'headphone', price: 400, color: 'gray'},
    {name: 'gadget', price: 5200, color: 'blue'},
    {name: 'shoes', price: 5200, color: 'blue'}
]

const expensive = products.filter(x => x.price > 1000);
console.log(expensive);

const blacks = products.filter(x => x.color == 'black');
console.log(blacks);

// if it is not available in array then it will return an empty array
const red = products.filter(x => x.color == 'red');
console.log(red);

// find will only provide one element although the array could contain multiple similar property n it doesn't provide an array in return. it will provide the object itself.

const blue = products.find(x => x.color == 'blue');
console.log(blue)