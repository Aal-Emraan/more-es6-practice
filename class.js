class Support{
    name;
    designation = 'Support Web Developer';
    address = 'Bangladesh';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    state(){
        return `${this.name} is a ${this.designation} in our company. He is from ${this.address}.`
    }
}

const aal = new Support('Aal Emraan', 'Sylhet');
console.log(aal);
console.log(aal.state());