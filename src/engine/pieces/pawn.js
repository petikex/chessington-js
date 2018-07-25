import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let dir = 1;
        if (this.player == Player.BLACK) {dir = -1};
        let availableMoves = [];      
        const location = board.findPiece(this);
        let haveMoved 
        if (((location.row === 1) && (dir === 1)) || ((location.row === 6) && (dir === -1))) {
            haveMoved = false;
        }
        else {haveMoved = true;}
        if ((location.moveInDirection(dir,0).onboard) && (!board.getPiece(location.moveInDirection(dir,0)))) {
            availableMoves.push(location.moveInDirection(dir,0));
            if ((location.moveInDirection(2*dir,0).onboard) && (!board.getPiece(location.moveInDirection(2*dir,0))) && (!haveMoved)) {
                availableMoves.push(location.moveInDirection(dir,0));
            }
        }

        if ((location.moveInDirection(dir,1).onboard) && (!!board.getPiece(location.moveInDirection(dir,1))) && (board.getPiece(location.moveInDirection(dir,1)).player !== this.player)) {
            availableMoves.push((location.moveInDirection(dir,1).onboard));
        }
        if ((location.moveInDirection(dir,-1).onboard) && (!!board.getPiece(location.moveInDirection(dir,-1))) && (board.getPiece(location.moveInDirection(dir,-1)).player !== this.player)) {
            availableMoves.push((location.moveInDirection(dir,-1).onboard));
        }

        return availableMoves;
    }
}
