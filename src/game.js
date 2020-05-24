import Map from './map';
import Level from './level';
import Player from './player';
import RandomMovementCreature from './random-movement-creature';
import PlayerChasingCreature from './player-chasing-creature';
class Game {
    constructor(ctx, map, player, creatures,/** rmc2, pcc2, rmc3, pcc3, **/){
        this.nextLevel = 0;
        this.ctx = ctx;
        this.map = map;
        this.player = player;
        // this.levelRunning = false;
        this.creatures = creatures;
       
        this.level1 = new Level("Level 1", this.ctx, this.map, this.player, this.creatures.slice(0, 3), this);
        this.level2 = new Level("Level 2", this.ctx, this.map, this.player, this.creatures.slice(5, 7), this);
        this.level3 = new Level("Level 3", this.ctx, this.map, this.player, this.creatures.slice(0, 1).concat(this.creatures.slice(5, 7)), this);
        this.level4 = new Level("Level 4", this.ctx, this.map, this.player, this.creatures.slice(0, 3).concat(this.creatures.slice(5, 7)), this);
        this.level5 = new Level("Level 5", this.ctx, this.map, this.player, this.creatures.slice(0, 5).concat(this.creatures.slice(5, 10)), this);
        this.levels = [this.level1, this.level2, this.level3, this.level4, this.level5]; 
        this.curLevel = this.level1; 
    }
    levelRunning(){
        // debugger;
        return this.curLevel.running();
    }
    startLevel() {
        // debugger
        this.curLevel = this.levels[this.nextLevel];
        this.curLevel.start();
        this.nextLevel += 1;
    }
}

export default Game;