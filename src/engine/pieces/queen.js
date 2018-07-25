import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const queenDirections = [[1,0],[0,1],[-1,0],[0,-1],[1,1],[-1,1],[-1,1],[-1,-1]];
        return findSquares(board, board.findPiece(this) ,queenDirections, true);
    }
}
