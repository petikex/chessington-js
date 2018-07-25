import Piece from './piece';
import findSquares from './piece'

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const rookDirections = [[1,0],[0,1],[-1,0],[0,-1]];
        return findSquares(board, board.findPiece(this) ,rookDirections, true);
    }
}
