class Uber{
    constructor(km, price = km*8)
    {
        this.km = km;
        this.Price = this.km*8
    }

    getPrice()
    {
        return `Final Price is Rs:${this.Price}`
    }
}

const ub = new Uber(11)
console.log(ub.getPrice())
