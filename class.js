class Support{
    name;
    designation = 'Support Web Developer';
    address = 'Bangladesh';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    state(game){
        return `${this.name} is a ${this.designation} in our company. He is from ${this.address}. He likes to play ${game}.`
    }
}

class Post extends Support{
    post;
    constructor(name,address,post){
        super(name,address);
        this.post = post;
    }
    work(title){
        console.log(`${this.name} is ${this.post} of our company. He comes from the most beautifull city of bangladesh which is ${this.address}. He is leading the designation of ${title} of our company.`)
    }
}

class Service extends Support{
    service(work,price){
        console.log(`${this.name} is a serviceman of our company. He can do ${work} for you. And it will cost you ${price} taka.`)
    }
}

const aal = new Support('Aal Emraan', 'Sylhet');
console.log(aal);
console.log(aal.state());

const nadir = new Support('Nadir Ahmed', 'Dhaka');
console.log(nadir);
console.log(nadir.state('Football'));

const aalEmraan = new Post('Aal Emraan','Sylhet','Chairman');
console.log(aalEmraan);
aalEmraan.work('CEO');

const aalE = new Service('aal emraan','sylhet');
aalE.service('software engineering', 300000);