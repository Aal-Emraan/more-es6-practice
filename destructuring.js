const fish = {name: 'tenoalosa ilisha', color: 'silver', price: 5000, phone: "iPhone 5", weight: '50kg'};
// const name = fish.name;
// const color = fish.color;
// console.log(name, color);

// const {name,color,price} = fish;
// console.log(phone,name,color,price);

const company = {name: 'hello world',
employee: ['abir', 'babir', 'sabit', 'akmol'],
depertment: {computer:'panasonic', phone: 'samsung', hotline: 40380049, unit: 6},
office: {first: 'tejgong',second:{
    ali: 'nurpur', hamza: 'mirpur', rohmot: 'dhanmondi'
}}
}

console.log(company);
console.log(company.office.second.hamza);
const {computer,phone,  unit} = company.depertment;
console.log(computer,phone, unit);