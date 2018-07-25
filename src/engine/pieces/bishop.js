import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const bishopDirections = [[1,1],[-1,1],[-1,1],[-1,-1]];
        return findSquares(board, board.findPiece(this) , bishopDirections, true);
    }
}
