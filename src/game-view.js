import Game from './game';
import Map from './map';
import Player from './player';

class GameView {
    start(ctx, game, map, player, rmc, pcc, /**rmc2, pcc2, rmc3, pcc3**/) {
        // debugger
        map.drawMap(8, ctx);
        player.drawPlayer(ctx);
        let tiledash = window.setInterval(() => game.step(ctx, map, player, rmc, pcc, /**rmc2, pcc2, rmc3, pcc3,**/ tiledash), 30);
    }
}

export default GameView;