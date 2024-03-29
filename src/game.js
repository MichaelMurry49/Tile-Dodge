
import Level from './level';

class Game {
    constructor(ctx, map, player, creatures){
        this.extraLives = 10;
        this.nextLevel = 0;
        this.ctx = ctx;
        this.map = map;
        this.player = player;
        this.creatures = creatures;
       
        this.level1 = new Level(0, this.ctx, this.map, this.player, this.creatures.slice(0, 3), this);
        this.level2 = new Level(1, this.ctx, this.map, this.player, this.creatures.slice(5, 7), this);
        this.level3 = new Level(2, this.ctx, this.map, this.player, this.creatures.slice(5, 8), this);
        this.level4 = new Level(3, this.ctx, this.map, this.player, this.creatures.slice(0, 1).concat(this.creatures.slice(6, 9)), this);
        this.level5 = new Level(4, this.ctx, this.map, this.player, this.creatures.slice(0, 3).concat(this.creatures.slice(6, 8)).concat(this.creatures.slice(9)), this);
        this.level6 = new Level(5, this.ctx, this.map, this.player, this.creatures.slice(0, 5).concat(this.creatures.slice(5, 10)), this);
        this.levels = [this.level1, this.level2, this.level3, this.level4, this.level5, this.level6]; 
        this.curLevel = this.level1; 
    }
    levelRunning(){
        return this.curLevel.running();
    }
    livesLeft(){
        return this.extraLives;
    }
    loseLife(){
        this.extraLives -= 1;
    }
    gainLife(){
        this.extraLives += 1;
    }

    startLevel(levelId) {
        this.curLevel = this.levels[levelId];
        this.curLevel.start();
    }
}

export default Game;