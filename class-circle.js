class Circle{
    constructor(radius, color)
    {
        this.radius = radius;
        this.color = color;
    }

    getRadius()
    {
        return this.radius;
    }

    setRadius(radius)
    {
        this.radius = radius;
    }
    getColor()
    {
        return  this.color;
    }

    setColor(color)
    {
        this.color = color;
    }

    toString()
    {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea()
    {
        var Area = 3.14*this.radius*this.radius;
        return Area
    }

    getCircumference()
    {
        var Circumference = 2*this.radius*3.14;
        return Circumference
    }
}

const circles = new Circle(12,"red")
circles.setRadius(12)

console.log(circles)

console.log(circles.getRadius())
console.log(circles.getArea())
console.log(circles.getCircumference())
