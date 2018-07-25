import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
        this.moveDirections = [[1,1],[1,0],[0,1],[-1,0],[-1,1],[]]
    }

    getAvailableMoves(board) {
        const kingDirections = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,1],[-1,-1]];
        return findSquares(board, board.findPiece(this) ,kingDirections);
    }
}
