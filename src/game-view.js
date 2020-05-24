import Game from './game';
import Map from './map';
import Player from './player';

class GameView {
    constructor(game){
        this.game = game;
    }
    start() {
        this.game.startLevel();
        
    }
}

export default GameView;