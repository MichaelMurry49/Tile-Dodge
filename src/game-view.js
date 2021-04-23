class GameView {
    constructor(game){
        this.game = game;
    }
    start() {
        this.game.startLevel(0);
        
    }
}

export default GameView;