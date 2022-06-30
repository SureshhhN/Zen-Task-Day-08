class Person{
    constructor(name, age, salary)
    {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    candidate()
    {
        return `Myself ${this.name}`
        
    }

    Age()
    {
        return `Im just ${this.age}`

    }
}

const Suresh = new Person("Suresh", "21", "20K")
console.log(Suresh.candidate())
console.log(Suresh.Age())
