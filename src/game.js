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
        this.creatures = creatures; 
        this.level1 = new Level("Level 1", this.ctx, this.map, this.player, this.creatures.slice(0, 5));
        this.levels = [this.level1];
    }
    startLevel() {
        // debugger
        this.levels[this.nextLevel].start();
        this.nextLevel += 1;
    }
}

export default Game;