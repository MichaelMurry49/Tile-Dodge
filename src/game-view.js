import Game from './game';
import Map from './map';
import Player from './player';

class GameView {
    start(ctx, game, map, player, rmc, pcc) {
        // debugger
        map.drawMap(8, ctx);
        player.drawPlayer(ctx);
        let tiledash = window.setInterval(() => game.step(ctx, map, player, rmc, pcc, tiledash), 30);
    }
}

export default GameView;