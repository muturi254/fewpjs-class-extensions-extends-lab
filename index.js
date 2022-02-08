// Your code here
class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray;
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((count, acc) => acc += count)
    }
}


class Triangle extends Polygon {
    // inherits 
    get isValid() {
        let side = this.sides;
        if ((side[0] + side[1]) > side[side.length-1] && (side[side.length -1 ] + side[1])> side[0]) {
            return true;
        }
        return false
    }
}


class Square extends Polygon {
    // inherits 
    get isValid() {
       return this.sides.every(side => side == this.sides[0])
    }


    get area() {
        return this.sides[0] * this.sides[0]
    }
}

let triangle = new Square([2,2,2, 2]);
console.log(triangle.isValid);