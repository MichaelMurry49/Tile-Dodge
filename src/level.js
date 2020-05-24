import Map from './map';
import Player from './player';
import RandomMovementCreature from './random-movement-creature';
import PlayerChasingCreature from './player-chasing-creature';
class Level {
    constructor(title, ctx, map, player, creatures, game){
        this.ctx = ctx;
        this.map = map;
        this.player = player;
        this.creatures = creatures;
        this.levelRunning = false;
        this.title = title;
        this.game = game;

    }

    running(){
        // debugger;
        return this.levelRunning;
    }
    start(){
        this.curLevel = window.setInterval(() => this.step(), 30);
        this.levelRunning = true;
    }
    step() {
        // debugger
        this.map.drawMap(8, this.ctx, this.title);

        let movements = document.addEventListener("keypress", e => {
            // ctx.clearRect(60 * this.pos[0] + 80, 60 * this.pos[1] + 60, this.size, this.size);
            this.player.move(e.key)
        }, false)
        // debugger;
        this.player.drawPlayer(this.ctx);

        this.creatures.map(el => {
            el.drawCreature(this.ctx);
        })

        this.creatures.map(el => {
            if (el.getXPos() === this.player.getXPos() && el.getYPos() === this.player.getYPos()) {
            // debugger;
            alert("game over, you lose");
            this.levelRunning = false;
            window.clearInterval(this.curLevel);
        }
        })
        
        // debugger
        if (this.map.getColorArray().every(outerEl => outerEl.every(innerEl => innerEl === "lightgreen"))) {
            alert("congratulations, you win");
            this.levelRunning = false;
            window.clearInterval(this.curLevel);
            this.map.reset();
            this.player.reset();
            this.game.startLevel();

        }

    }
}

export default Level;