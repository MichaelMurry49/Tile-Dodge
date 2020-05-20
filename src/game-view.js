import Game from './game';
import Map from './map';
import Player from './player';

class GameView {
    start(ctx, game, map, player) {
        // debugger
        map.drawMap(8, ctx);
        player.drawPlayer(ctx);
        window.setInterval(() => game.step(ctx, map, player), 30);
    }
}

export default GameView;