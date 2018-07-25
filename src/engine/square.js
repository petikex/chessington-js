export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }
    moveInDirection(x,y) {
        return new Square(this.row + x, this.col + y);
    }
    onboard()  {return ((this.row >= 0) && (this.row <= 7) && (this.col >= 0) && (this.col <= 7))}
}
