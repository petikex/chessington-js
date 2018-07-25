export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}


export function findSquares(board, square, directions, repeat = false) {
    let value = [];
    directions.foreach(direction => {
        if ((square.moveInDirection(direction).onboard) && (board.getPice(square).player !== board.getPiece(square.moveInDirection(direction)).player)) {
            value.push(square.moveInDirection(direction));
            if ((repeat) && (!board.getPiece(square.moveInDirection(direction)))) {
                value.concat(findSquares(square.moveInDirection(board, square.moveInDirection(direction),[direction], true)));
            }
        }
    })
    return value;
}
