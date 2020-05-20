import Map from './map';
import Player from './player';
import RandomMovementCreature from './random-movement-creature';
import PlayerChasingCreature from './player-chasing-creature';
class Game {
    // constructor(){

    // }
    step(ctx, map, player, rmc, pcc, tiledash) {
        // debugger
        map.drawMap(8, ctx);

        document.addEventListener("keypress", e => {
            // ctx.clearRect(60 * this.pos[0] + 80, 60 * this.pos[1] + 60, this.size, this.size);
            player.move(e.key)
        }, false)
        // debugger;
        player.drawPlayer(ctx);
        // window.setInterval(() => rmc.move(), 2000);
        // rmc.move();
        // rmc.drawCreature(ctx);
        rmc.drawCreature(ctx);
        pcc.drawCreature(ctx);
        // debugger;
        if((pcc.getXPos() === player.getXPos() && pcc.getYPos() === player.getYPos()) || 
            (rmc.getXPos() === player.getXPos() && rmc.getYPos() === player.getYPos())){
                // debugger;
                alert("game over, you lose");
                window.clearInterval(tiledash);
            }

    }
}

export default Game;