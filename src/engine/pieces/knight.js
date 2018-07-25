import Piece from './piece';
import findSquares from './piece'

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const kinghtDirections = [[2,-1],[-2,-1],[-2,1],[2,1],[1,2],[1,-2],[-1,2],[-1,-2]];
        return findSquares(board, board.findPiece(this) ,kinghtDirections);
    }
}
