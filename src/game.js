import Map from './map';
import Player from './player';
import RandomMovementCreature from './random-movement-creature'
class Game {
    // constructor(){

    // }
    step(ctx, map, player, rmc) {
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

    }
}

export default Game;