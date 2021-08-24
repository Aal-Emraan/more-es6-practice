const array = [28,44535,5,67,3454,4,53,435,5,4,5];
const double = array.map(x => x*2);
console.log(double);

const zero = array.map(x => x-x);
console.log(zero);

const name = ['tom hanks', 'tobay morgui', 'robert pattinson', 'tom cruise', 'tony stark'];
const length = name.map(x => x.length);
console.log(length);

const  products = [
    {name: 'apple watch', price: 40000, color: 'black'},
    {name: 'router', price: 3000, color: 'white'},
    {name: 'headphone', price: 400, color: 'gray'},
    {name: 'gadget', price: 5200, color: 'blue'}
]

const prices = products.map(x => x.price);
console.log(prices);

products.forEach(x => console.log(x.name));
products.forEach(x => console.log(x.color));